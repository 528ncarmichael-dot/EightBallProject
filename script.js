/*
  Magic 8 Ball
  Name: Nicholas Carmichael
  Period: 4
*/

function askEightBall() {
  let userName = document.getElementById("nameInput").value;
  let userQuestion = document.getElementById("questionInput").value;

  console.log(userName, userQuestion)

  if (userName === "") {
    document.getElementById("greeting").textContent = "Hello, random person!"
  } else {
    document.getElementById("greeting").textContent = "Hello, " + userName + "!"
  }

  document.getElementById("questionOut").textContent = "";

  if (userQuestion === "") {
    document.getElementById("questionOut").textContent = "";
    document.getElementById("answer").textContent = "The 8 Ball needs a question";
    document.getElementById("answerType").innerHTML = "";
    return;
  }

  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
}