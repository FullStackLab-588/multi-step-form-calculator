// main section top buttons
const btnMultiStep = document.getElementById("btn-multi-step-Form");
const btnCalculator = document.getElementById("btn-Calculator-open");

const multiStepPage = document.getElementById("multiStepPage");
const calculatorPage = document.getElementById("calculatorPage");


multiStepPage.style.display = "block";
calculatorPage.style.display = "none";


btnCalculator.addEventListener("click", function () {
  multiStepPage.style.display = "none";
  calculatorPage.style.display = "block";
});


btnMultiStep.addEventListener("click", function () {
  calculatorPage.style.display = "none";
  multiStepPage.style.display = "block";
});

// form section
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const previous2 = document.getElementById("previous2");
const previous3 = document.getElementById("previous3");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const company = document.getElementById("company");
const designation = document.getElementById("designation");

const mainForm = document.getElementById("multiForm");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const togglePassword = document.getElementById("togglePassword");


function validateStep1() {
  document.getElementById("firstNameError").textContent = "";
  document.getElementById("lastNameError").textContent = "";
  firstName.classList.remove("error-input");
  lastName.classList.remove("error-input");

  if (firstName.value.trim() === "") {
    document.getElementById("firstNameError").textContent = "Please fill this field";
    firstName.classList.add("error-input");
    return false;
  }

  if (lastName.value.trim() === "") {
    document.getElementById("lastNameError").textContent = "Please fill this field";
    lastName.classList.add("error-input");
    return false;
  }

  return true;
}

function validateStep2() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  email.classList.remove("error-input");
  password.classList.remove("error-input");

  if (email.value.trim() === "") {
    document.getElementById("emailError").textContent = "Please fill this field";
    email.classList.add("error-input");
    return false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.getElementById("emailError").textContent = "Invalid email format";
    email.classList.add("error-input");
    return false;
  }

  if (password.value.trim() === "") {
    document.getElementById("passwordError").textContent = "Please fill this field";
    password.classList.add("error-input");
    return false;
  } else if (password.value.trim().length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    password.classList.add("error-input");
    return false;
  }

  return true;
}

function validateStep3() {
  document.getElementById("companyError").textContent = "";
  document.getElementById("designationError").textContent = "";
  company.classList.remove("error-input");
  designation.classList.remove("error-input");

  if (company.value.trim() === "") {
    document.getElementById("companyError").textContent = "Please fill this field";
    company.classList.add("error-input");
    return false;
  }

  if (designation.value.trim() === "") {
    document.getElementById("designationError").textContent = "Please fill this field";
    designation.classList.add("error-input");
    return false;
  }

  return true;
}


function goToStep1() {
  form1.style.left = "0px";
  form2.style.left = "460px";
  form3.style.left = "460px";

  circles[0].classList.add("active");
  circles[1].classList.remove("active");
  circles[2].classList.remove("active");

  progress.style.width = "0%";
}

function goToStep2() {
  if (!validateStep1()) return;

  form1.style.left = "-460px";
  form2.style.left = "0px";
  form3.style.left = "460px";

  circles[0].classList.add("active");
  circles[1].classList.add("active");
  circles[2].classList.remove("active");

  progress.style.width = "50%";
}

function goToStep3() {
  if (!validateStep1() || !validateStep2()) return;

  form1.style.left = "-460px";
  form2.style.left = "-460px";
  form3.style.left = "0px";

  circles[0].classList.add("active");
  circles[1].classList.add("active");
  circles[2].classList.add("active");

  progress.style.width = "100%";
}

//button click
next1.addEventListener("click", goToStep2);
previous2.addEventListener("click", goToStep1);
next2.addEventListener("click", goToStep3);
previous3.addEventListener("click", goToStep2);

// circles click
circles[0].addEventListener("click", goToStep1);
circles[1].addEventListener("click", goToStep2);
circles[2].addEventListener("click", goToStep3);

//submit
submitBtn.addEventListener("click", function() {
  if (!validateStep3()) return;

  result.style.display = "block";
  result.innerHTML = `
    <p>First Name: ${firstName.value}</p>
    <p>Last Name: ${lastName.value}</p>
    <p>Email: ${email.value}</p>
    <p>Company: ${company.value}</p>
    <p>Designation: ${designation.value}</p>
  `;

  mainForm.reset();
  goToStep1();
});

// for password show/hide
togglePassword.addEventListener("click", function() {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    password.type = "password";
    togglePassword.textContent = "Show";
  }
});

// calculator js


const mResultDisplay = document.getElementById("m-result-display");

// access 0 to 9 btns
const btn0= document.querySelector(".btn-0");
btn0.addEventListener("click" , function(){
mResultDisplay.value += "0";
});

const btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click" , function(){
mResultDisplay.value += "1";

});

const btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", function(){
mResultDisplay.value += "2";

});
const btn3 = document.querySelector(".btn-3");
btn3.addEventListener("click" , function(){
mResultDisplay.value += "3";
});
const btn4 = document.querySelector(".btn-4");
btn4.addEventListener("click" , function(){
  mResultDisplay.value += "4";
});
 
const btn5 = document.querySelector(".btn-5");
btn5.addEventListener("click", function(){
  mResultDisplay.value += "5";
})

const btn6 = document.querySelector(".btn-6");
btn6.addEventListener("click", function(){
  mResultDisplay.value += "6";
});
const btn7 = document.querySelector(".btn-7");
btn7.addEventListener("click", function(){
  mResultDisplay.value += "7";
});
const btn8 = document.querySelector(".btn-8");
btn8.addEventListener("click", function(){
  mResultDisplay.value += "8";
});
const btn9 = document.querySelector(".btn-9");
btn9.addEventListener("click", function(){
  mResultDisplay.value += "9";
});


// other btns
const btnclear1 = document.querySelector(".btn-clear-1");
btnclear1.addEventListener("click", function(){
  mResultDisplay.value = "";
});

const btnExit = document.querySelector(".btn-exit");
btnExit.addEventListener("click", function(){ 
  mResultDisplay.value = ""; alert("Calculator Closed!"); 

});



// operator btns
const btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", function(){
  mResultDisplay.value += "+";
});

const btnMinus = document.querySelector(".btn-mins");
btnMinus.addEventListener("click", function(){
  mResultDisplay.value += "-";
});

const btnMultiply = document.querySelector(".btn-x");
btnMultiply.addEventListener("click", function(){
  mResultDisplay.value += "*";
});

const btnDivide = document.querySelector(".btn-div");
btnDivide.addEventListener("click", function(){
  mResultDisplay.value += "/";
});
const btnPre = document.querySelector(".btn-pre");
btnPre.addEventListener("click", function(){
   mResultDisplay.value += "%";
  });

const btnDot = document.querySelector(".btn-dot");
btnDot.addEventListener("click", function(){
  mResultDisplay.value += ".";
});


const btnComma = document.querySelector(".btn-comma");
btnComma.addEventListener("click", function () {
  mResultDisplay.value += ",";
});



const btnCross = document.querySelector(".btn-cross-back");
btnCross.addEventListener("click", function() {
  mResultDisplay.value = mResultDisplay.value.slice(0, -1);
});

const btnOpenBracket = document.querySelector(".btn-obrc");
btnOpenBracket.addEventListener("click", function(){
  mResultDisplay.value += "(";
});

const btnCloseBracket = document.querySelector(".btn-cbrc");
btnCloseBracket.addEventListener("click", function(){
  mResultDisplay.value += ")";
});


const btnMean = document.querySelector(".btn-mean");

btnMean.addEventListener("click", function () {
  let input = mResultDisplay.value;  
  let numbers = input.split(",");

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let num = Number(numbers[i]);

    if (isNaN(num)) {
      mResultDisplay.value = "Error";
      return;
    }

    sum = sum + num;
  }

  let mean = sum / numbers.length;

  mResultDisplay.value = mean;

  const li = document.createElement("li");
  li.innerText = "Mean(" + input + ") = " + mean;
  historyList.appendChild(li);
});

const btnEqual = document.querySelector(".btn-equal");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

btnEqual.addEventListener("click", function () {
  // befoRE calculation full expression
  let expression = mResultDisplay.value;

  
  calculateDisplay();

  const li = document.createElement("li");
  li.innerText = expression + " = " + mResultDisplay.value;
  historyList.appendChild(li);
});

// clear history btn
clearHistory.addEventListener("click", function () {
  historyList.innerHTML = "";
});




// function calculateDisplay() {
//   let input = mResultDisplay.value;

//   try {
//     mResultDisplay.value = Function("return " + input)();
//   } catch {
//     mResultDisplay.value = "Error";
//   }
// }

function calculateDisplay() {
  let text = mResultDisplay.value.replace(/\s+/g, "");

  if (text === "") {
    mResultDisplay.value = "Error";
    return;
  }

  let parts = makeParts(text);
  parts = fixMultiplication(parts);

  let result = solveExpression(parts);

  if (result === null || isNaN(result)) {
    mResultDisplay.value = "Error";
  } else {
    mResultDisplay.value = result;
  }
}

/* ---------- split numbers & operators ---------- */
function makeParts(text) {
  let list = [];
  let num = "";

  for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    if ((ch >= "0" && ch <= "9") || ch === ".") {
      num += ch;
    } else {
      if (num !== "") {
        list.push(Number(num));
        num = "";
      }
      list.push(ch);
    }
  }

  if (num !== "") list.push(Number(num));
  return list;
}

/* ---------- fix 6(5+2) → 6*(5+2) ---------- */
function fixMultiplication(list) {
  let fixed = [];

  for (let i = 0; i < list.length; i++) {
    fixed.push(list[i]);

    if (
      typeof list[i] === "number" &&
      list[i + 1] === "("
    ) {
      fixed.push("*");
    }

    if (
      list[i] === ")" &&
      typeof list[i + 1] === "number"
    ) {
      fixed.push("*");
    }
  }
  return fixed;
}

/* ---------- solve expression ---------- */
function solveExpression(list) {
  list = solveBrackets(list);
  list = solveSigns(list, ["*", "/", "%"]);
  list = solveSigns(list, ["+", "-"]);
  return list[0];
}

/* ---------- brackets ---------- */
function solveBrackets(list) {
  while (list.includes("(")) {
    let close = list.indexOf(")");
    let open = list.lastIndexOf("(", close);

    let inner = list.slice(open + 1, close);
    let value = solveExpression(inner);

    list.splice(open, close - open + 1, value);
  }
  return list;
}

/* ---------- operators ---------- */
function solveSigns(list, signs) {
  let i = 0;

  while (i < list.length) {
    if (signs.includes(list[i])) {
      let op = list[i];
      let a = list[i - 1];
      let b = list[i + 1];

      if ((op === "/" || op === "%") && b === 0) {
        return [null];
      }

      let val = doMath(a, b, op);
      list.splice(i - 1, 3, val);
      i = 0;
    } else {
      i++;
    }
  }
  return list;
}

/* ---------- math logic ---------- */
function doMath(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return a / b;
  if (op === "%") return (a / 100) * b;
}
