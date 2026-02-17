document.addEventListener("DOMContentLoaded", function () {

    const dobInput = document.getElementById("dob");
    const result = document.getElementById("result");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");

    submitBtn.addEventListener("click", function () {

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

        result.textContent = `You are ${years} Years, ${months} Months, and ${days} Days old.`;
    });

    resetBtn.addEventListener("click", function () {
        dobInput.value = "";
        result.textContent = "";
    });

});
