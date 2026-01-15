let currentStep = 1;
const steps = document.querySelectorAll(".form-step");
const circles = document.querySelectorAll(".step-circle");
const progressBar = document.getElementById("progressBar");

function showStep(step) {
  for (let i = 0; i < steps.length; i++) {
    steps[i].classList.toggle("active", i === step - 1);
    circles[i].classList.toggle("active", i < step);
  }
  updateProgressBar(step);
}

function updateProgressBar(step) {
  const widths = ["33%", "66%", "100%"];
  progressBar.style.width = widths[step - 1];
}

function validateStep(step) {
  let valid = true;

  // Clear all previous errors
  const errors = document.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].textContent = "";
  }

  if (step === 1) {
    let first = document.getElementById("firstName").value.trim();
    let last = document.getElementById("lastName").value.trim();

    if (!first) {
      document.getElementById("firstNameError").textContent = "Please fill up the fields";
      valid = false;
    }
    if (!last) {
      document.getElementById("lastNameError").textContent = "Please fill up the fields";
      valid = false;
    }
  }

  if (step === 2) {
    let emailValue = document.getElementById("email").value.trim();
    let passwordValue = document.getElementById("password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue || !emailRegex.test(emailValue)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      valid = false;
    }
    if (!passwordValue || passwordValue.length < 6) {
      document.getElementById("passwordError").textContent = "Minimum 6 characters required";
      valid = false;
    }
  }

  if (step === 3) {
    let companyValue = document.getElementById("company").value.trim();
    let designationValue = document.getElementById("designation").value.trim();

    if (!companyValue) {
      document.getElementById("companyError").textContent = "Required";
      valid = false;
    }
    if (!designationValue) {
      document.getElementById("designationError").textContent = "Required";
      valid = false;
    }
  }

  return valid;
}

function nextStep() {
  if (validateStep(currentStep)) {
    currentStep++;
    showStep(currentStep);
  }
}

function previousStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

function goToStep(step) {
  if (step <= currentStep && validateStep(step - 1)) {
    currentStep = step;
    showStep(step);
  }
}

function togglePassword() {
  let pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

function submitForm() {
  if (validateStep(3)) {
    let first = document.getElementById("firstName").value.trim();
    let last = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let company = document.getElementById("company").value.trim();
    let designation = document.getElementById("designation").value.trim();

    let resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
      <p><strong>First Name:</strong> ${first}</p>
      <p><strong>Last Name:</strong> ${last}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Designation:</strong> ${designation}</p>
    `;
  }
}
