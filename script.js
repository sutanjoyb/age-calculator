document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const dobInput = document.getElementById("dob");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const dobValue = dobInput.value;

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

        if (years < 0) {
            result.textContent = "Date of Birth cannot be in the future.";
            return;
        }

        result.textContent = `You're ${years} Years, ${months} Months, and ${days} Days old.`;
    });

    form.addEventListener("reset", function () {
        result.textContent = "";
    });
});