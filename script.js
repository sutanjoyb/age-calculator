document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const dobValue = document.getElementById("dob").value;

        if (!dobValue) {
            result.textContent = "Please select your Date of Birth.";
            return;
        }

        const birthDate = new Date(dobValue);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        let parts = [];

        if (years > 0) {
            parts.push(years + (years === 1 ? " Year" : " Years"));
        }

        if (months > 0) {
            parts.push(months + (months === 1 ? " month" : " months"));
        }

        if (days > 0) {
            parts.push(days + (days === 1 ? " day old" : " days old"));
        }

        if (parts.length === 0) {
            parts.push("0 days old");
        }

        result.textContent = "Your age is " + parts.join(" ") + ".";
    });

    form.addEventListener("reset", function () {
        result.textContent = "";
    });
});