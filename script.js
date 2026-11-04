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

  switch (randomNumber) {
    case 0: eightBall = "It is certain"; break;
    case 1: eightBall = "It is decidedly so"; break;
    case 2: eightBall = "Signs point to yes"; break;
    case 3: eightBall = "Reply hazy, try again"; break;
    case 4: eightBall = "Cannot predict now"; break;
    case 4: eightBall = "Ask again Later"; break;
    case 5: eightBall = "Ask again later"; break;
    case 6: eightBall = "Do not count on it"; break;
    case 7: eightBall = "My sources say no"; break;
  }
}