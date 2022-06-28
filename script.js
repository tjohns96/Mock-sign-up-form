const submitBtn = document.querySelector(".createAcc");
const inputs = document.querySelectorAll("input");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const phoneNum = document.querySelector("#phoneNum");
submitBtn.addEventListener("click", () => {
    inputs.forEach((input) => {
        input.classList.add("required");
    });
});
form.addEventListener("submit", function (e) {
    Array.from(inputs).slice().reverse().forEach((input) => {
        if (input.validity.valueMissing) {
            input.setCustomValidity("Required field.")
            input.reportValidity();
            e.preventDefault();
        }
        else if (input.validity.typeMismatch) {
            input.setCustomValidity("Please enter a valid email address.")
            input.reportValidity();
            e.preventDefault();
        }
        else if (input.validity.patternMismatch) {
            input.setCustomValidity("Please enter a valid phone number.")
            input.reportValidity();
            e.preventDefault();
        }
        else if (input.validity.tooShort) {
            input.setCustomValidity(`Must be at least 6 characters. You entered ${input.value.length}.`)
            input.reportValidity();
            e.preventDefault();
        }
        else if (input.getAttribute("id") === "passwordConfirm") {
            if (password.value !== passwordConfirm.value) {
                passwordConfirm.setCustomValidity("Passwords do not match.")
                passwordConfirm.reportValidity();
                e.preventDefault();
            }
        }
        else {
            input.setCustomValidity("");
        }
    });
});

passwordConfirm.addEventListener("input", (e) => {
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Passwords do not match.")
        passwordConfirm.reportValidity();
        passwordConfirm.classList.add("required");
    }
    else {
        passwordConfirm.setCustomValidity("");
        passwordConfirm.classList.remove("required");
    }
})
password.addEventListener("input", (e) => {
    if (password.value.length < 6) {
        password.setCustomValidity("Password must be at least 6 characters.");
        password.reportValidity();
        password.classList.add("required");
    }
    else {
        password.setCustomValidity("");
        password.classList.remove("required");
    }
})
email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address.")
        email.reportValidity();
        email.classList.add("required");
    }
    else if (email.validity.tooShort) {
        email.setCustomValidity(`Must be at least 6 characters. You entered ${email.value.length}.`)
        email.reportValidity();
        email.classList.add("required");
    }
    else {
        email.setCustomValidity("");
        email.classList.remove("required");
    }
})