// Homework 1

const hello_h1 = document.querySelector(".hello_h1");
const hello_p = document.querySelector(".hello_p");

hello_h1.textContent = "Hello My Name Is H1";
hello_p.textContent = "Hello My Name Is P";

hello_h1.textContent += " ABC123";
hello_p.textContent += " Param Pam";

// Homework 1

// Homework 2
const add_number = document.querySelector(".add_number");
const show_sum = document.querySelector(".show_sum");
const num1 = 1;
const num2 = 2;

add_number.addEventListener("click", function sum() {
  show_sum.textContent = num1 + num2;
});
// Homework 2

// Homework 3
const div1 = document.querySelector(".div1");

// div1.innerHTML = `<input type="text"> <a class="google_link" href="https://www.google.com/" target="_blank">Google Link</a>`;

div1.innerHTML = `<input type="text">`;
// div1.innerHTML += "<br/>";
div1.innerHTML += `<a class="google_link" href="https://www.google.com/" target="_blank">Google Link</a>`;
// Homework 3

// Homework 4
const number1 = Number(prompt("Enter First Number"));
const number2 = Number(prompt("Enter Second Number"));

const multiplyNums = function (number1, number2) {
  console.log("ორი რიცხვის ნამრავლი არის: ", number1 * number2);
};

multiplyNums(number1, number2);
// Homework 4
