
// form
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

// progress bar
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

// buttons
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const previous2 = document.getElementById("previous2");
const previous3 = document.getElementById("previous3");

/* Step 1 → Step 2 */
next1.addEventListener("click", function () {

  const fName = firstName.value.trim();
  const lName = lastName.value.trim();

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");

  // reset previous errors
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  firstName.classList.remove("error-input");
  lastName.classList.remove("error-input");

  if(fName === "" || lName === "") {
    if(fName === "") {
      firstNameError.textContent = "Please fill this field";
      firstName.classList.add("error-input");
    }
    if(lName === "") {
      lastNameError.textContent = "Please fill this field";
      lastName.classList.add("error-input");
    }
    return; // stop next
  }

  // next step
  form1.style.left = "-460px";
  form2.style.left = "0px";

  circles[0].classList.add("active");
  circles[1].classList.add("active");
  circles[2].classList.remove("active");

  progress.style.width = "50%";
});


/* Step 2 → Step 1 */
previous2.addEventListener("click", function () {

  form1.style.left = "0px";
  form2.style.left = "460px";

  circles[0].classList.add("active");
  circles[1].classList.remove("active");
  circles[2].classList.remove("active");

  progress.style.width = "0%";
});

/* Step 2 → Step 3 */
next2.addEventListener("click", function () {
  const emailValue = email.value.trim();
  const passValue = password.value.trim();
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // reset previous errors
  emailError.textContent = "";
  passwordError.textContent = "";
  email.classList.remove("error-input");
  password.classList.remove("error-input");

  // email pattren
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let hasssError = false;

  // validate email
  if (emailValue === "") {
    emailError.textContent = "Please fill this field";
    email.classList.add("error-input");
    hasssError = true;
  }
   else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Invalid email format";
    email.classList.add("error-input");
    hasssError = true;
  }

  // validate password
  if (passValue === "") {
    passwordError.textContent = "Please fill this field";
    password.classList.add("error-input");
    hasssError = true;
  } else if (passValue.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    password.classList.add("error-input");
    hasssError = true;
  }

  // if any error, stop
  if (hasssError) return;

  //  next step
  form2.style.left = "-460px";
  form3.style.left = "0px";

  circles[0].classList.add("active");
  circles[1].classList.add("active");
  circles[2].classList.add("active");

  progress.style.width = "100%";
});


/* Step 3 → Step 2 */
previous3.addEventListener("click", function () {
  form2.style.left = "0px";
  form3.style.left = "460px";

  circles[0].classList.add("active");
  circles[1].classList.add("active");
  circles[2].classList.remove("active");

  progress.style.width = "50%";
});

// defult state
circles[0].classList.add("active");
progress.style.width = "0%";


// Submit

const result = document.getElementById("result");


const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const company = document.getElementById("company");
const designation = document.getElementById("designation");

const mainForm = document.getElementById("multiForm");


const submitBtn = document.getElementById("submit");



submitBtn.addEventListener("click", function () {

   const compnyNameVal = company.value.trim();
const designationVal = designation.value.trim();
  const compnayError = document.getElementById("companyError");
  const designatonError = document.getElementById("designationError");

  // reset previous errors
  compnayError.textContent = "";
  designatonError.textContent = "";
  company.classList.remove("error-input");
  designation.classList.remove("error-input");

  if(compnyNameVal === "" || designationVal === "") {
    if(compnyNameVal === "") {
     compnayError.textContent = "Please fill this field";
      company.classList.add("error-input");
    }
    if(designationVal === "") {
      designatonError.textContent = "Please fill this field";
      designation.classList.add("error-input");
    }
    return; // stop next
  }




//  next run after return
  result.style.display = "block";
  result.innerHTML = `
    <p>First Name: ${firstName.value}</p>
    <p>Last Name: ${lastName.value}</p>
    <p>Email: ${email.value}</p>
    <p>Company: ${company.value}</p>
    <p>Designation: ${designation.value}</p>
  `;


  mainForm.reset();


  progress.style.width = "0%";

 
  circles[0].classList.add("active");
  circles[1].classList.remove("active");
  circles[2].classList.remove("active");

 
  form1.style.left = "0px";
  form2.style.left = "460px";
  form3.style.left = "460px";
});


const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function() {
  if (password.type === "password") {
    password.type = "text"; 
    togglePassword.textContent = "Hide";
  } else {
    password.type = "password"; 
    togglePassword.textContent = "Show";
  }
});


