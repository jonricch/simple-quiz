const form = document.getElementById("quiz-form");
const resetBtn = document.getElementById("reset-btn");
const answerInput1 = document.getElementById("answer-1");
const answerInput2 = document.getElementsByName("m-c");
const answerInput3 = document.getElementsByName("answer-3");
const resultDiv1 = document.getElementById("result-question1");
const resultDiv2 = document.getElementById("result-question2");
const resultDiv3 = document.getElementById("result-question3");

// get the values of each form here

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkQuestion1();
  checkQuestion2();
  checkQuestion3();
});

form.addEventListener("reset", function (event) {
  event.preventDefault();
  // Add more reset of inputs here

  answerInput1.value = "";

  for (let i = 0; i < answerInput2.length; i++) {
    answerInput2[i].checked = false;
  }

  for (let i = 0; i < answerInput3.length; i++) {
    answerInput3[i].checked = false;
  }

  answerInput1.textContent = "";
  resultDiv1.textContent = "";
  resultDiv1.style.color = "";
  resultDiv2.textContent = "";
  resultDiv2.style.color = "";
  resultDiv3.textContent = "";
  resultDiv3.style.color = "";
});

function checkQuestion1() {
  // Enter validation for question 1 here

  if (answerInput1.value.trim() === "") {
    resultDiv1.textContent = "You must enter an answer";
    resultDiv1.style.color = "red";
  } else if (answerInput1.value.trim().toLowerCase() === "manila") {
    resultDiv1.textContent = "Question 1: answer is correct!";
    resultDiv1.style.color = "green";
  } else {
    resultDiv1.textContent = "Questions 1: answer is incorrect.";
    resultDiv1.style.color = "red";
  }
}

function checkQuestion2() {
  // Enter validation for question 2 here
  let answer = "";
  for (let i = 0; i < answerInput2.length; i++) {
    if (answerInput2[i].checked) {
      answer = answerInput2[i].value;
      break;
    }
  }

  if (answer === "") {
    resultDiv2.textContent = "You must enter an answer";
    resultDiv2.style.color = "red";
  } else if (answer == "13") {
    resultDiv2.textContent = "Question 2: answer is correct!";
    resultDiv2.style.color = "green";
  } else {
    resultDiv2.textContent = "Question 2: answer is incorrect!";
    resultDiv2.style.color = "red";
  }
}

function checkQuestion3() {
  // Enter validation for question 3 here
  let answers = [];
  for (let i = 0; i < answerInput3.length; i++) {
    if (answerInput3[i].checked) {
      answers.push(answerInput3[i].value);
    }
  }

  if (answers.length === 0) {
    resultDiv3.textContent = "You must enter an answer";
    resultDiv3.style.color = "red";
  } else if (
    answers.includes("parrot") &&
    answers.includes("eagle") &&
    answers.includes("penguin")
  ) {
    resultDiv3.textContent = "Question 3: answer is correct";
    resultDiv3.style.color = "green";
  } else {
    resultDiv3.textContent = "Questions 3: answer is incorrect";
    resultDiv3.style.color = "red";
  }
}
