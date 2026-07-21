const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isRequiredValid = checkRequired([
    username,
    email,
    password,
    confirmPassword,
  ]); //put in an array for easier to check for input

  let isFormValid = isRequiredValid;

  if (isRequiredValid) {
    const isUsernameValid = checkLength(username, 3, 15);
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkLength(password, 6, 25);
    const isPasswordMatch = checkPasswordsMatch(password, confirmPassword);

    isFormValid =
      isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatch;
  }

  if (isFormValid) {
    alert("Registration successful!");
    form.reset();

    document.querySelectorAll(".form-group").forEach((group) => {
      group.className = "form-group";
    });
  }
});

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${formatFieldName(input)} must be at least ${min} characters.`,
    );
    return false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${formatFieldName(input)} must be less than ${max} characters.`,
    );
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function checkEmail(email) {
  //Email regex that covers most common email formats
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
    return false;
  }

  return true;
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
    return false;
  }
  showSuccess(input2);
  return true;
}

function checkRequired(inputArray) {
  let isValid = true;

  inputArray.forEach((input) => {
    //Password is required
    if (input.value.trim() === "") {
      showError(input, `${formatFieldName(input)} is required`);
      isValid = false;
    } else {
      showSuccess(input);
    }
  });
  return isValid;
}

function formatFieldName(input) {
  const nameMap = {
    confirmPassword: "Password", // or "Confirm Password" — whatever you prefer
    username: "Username",
    email: "Email",
    password: "Password",
  };
  //input id: username -> Username
  return (
    nameMap[input.id] || input.id.charAt(0).toUpperCase() + input.id.slice(1)
  ); // use the map if the id exists in it, otherwise fall back to the old capitalize logic.
}

function showError(input, message) {
  const formGroup = input.parentElement; //choose the parent element in html file
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}
