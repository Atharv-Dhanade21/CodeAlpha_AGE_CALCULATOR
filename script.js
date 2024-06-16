function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please select your date of birth.");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    const diffInMs = today - birthDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const totalMonths = years * 12 + months;
    const totalWeeks = diffInWeeks;
    const totalDays = diffInDays;
    const totalHours = diffInHours;

    document.getElementById('result').innerHTML = `
        Your age is ${years} years, ${months} months, and ${days} days.<br>
        Total months: ${totalMonths} months and ${days} days.<br>
        Total weeks: ${totalWeeks} weeks and ${days % 7} days.<br>
        Total days: ${totalDays} days.<br>
        Total hours: ${totalHours} hours.
    `;
}
