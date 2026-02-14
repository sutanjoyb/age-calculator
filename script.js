const form = document.getElementById("form");
const dobInput = document.getElementById("dob");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

const dobValue = dobInput.value;

const birthDate = new Date(dobValue);

const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
        monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    if (birthDate > today) {
        result.innerText = "Date of birth cannot be in the future.";
        return;
    }

    result.innerText = "Your age is " + age + " years.";
});

form.addEventListener("reset", function () {
    result.innerText = "";
});