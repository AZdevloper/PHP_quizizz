// import { questions } from "/assets/js/ques.js";
import { questions } from "./ques.js";

let getId = (id) => {
  return document.getElementById(id);
};

let btnstartid = getId("btnstart");
let img_and_parastartid = getId("img_and_parastart");

let question_id = getId("question_id");
let answer1 = getId("answer1");
let answer2 = getId("answer2");
let answer3 = getId("answer3");
let answer4 = getId("answer4");
let answer;
var elem = document.getElementById("myBar");
let number_of_questions = questions.length;

// get_randomNumber
let previousNumbers = [];
let get_random_number = (max, min) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  while (previousNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  previousNumbers.push(randomNumber);
  return randomNumber;
};
// show_next_quetion
let add_to_width = 100 / number_of_questions;
let width = -add_to_width;
let current_question = 1;
let show_next_quetion = () => {
  if (current_question <= number_of_questions) {
    let randomNumber = get_random_number(number_of_questions - 1, 0);
    console.log("randomNumber", randomNumber);
    console.log(questions[0]);

    let { question, choice1, choice2, choice3, choice4, answer_answer } =
      questions[randomNumber];
    question_id.innerText = question;
    answer1.innerText = choice1;
    answer2.innerText = choice2;
    answer3.innerText = choice3;
    answer4.innerText = choice4;
    answer = answer_answer;

    width += add_to_width;
    elem.style.width = width + "%";
    current_question++;
  } else {
    console.log(" done ");
    toggle();
  }
};

// set intervale
let intervalId = null;
let isRunning = false;

// function sayHello() {
//   console.log("Hello!");
// }

function toggle() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  } else {
    intervalId = setInterval(show_next_quetion, 2000);
    isRunning = true;
  }
}

toggle();

// let intervaleid = setInterval(show_next_quetion, 1000);

// setInterval(intervaleid);
let container = getId("answers_container");
let correct_answer;
let incorrect_answer = [];
let chosen_btn_id;
container.addEventListener("click", (event) => {
  if (event.target.id === "answer1") {
    chosen_btn_id = 1;
    toggle();
    toggle();
    // show_next_quetion();
  } else if (event.target.id === "answer2") {
    chosen_btn_id = 2;
    // setInterval(show_next_quetion, 1000);
    // show_next_quetion();
    //  clearInterval(intervaleid);
    //  setInterval(intervaleid);
    //  show_next_quetion();
  } else if (event.target.id === "answer3") {
    chosen_btn_id = 3;
    // setInterval(show_next_quetion, 1000);
    // show_next_quetion();
    //  clearInterval(intervaleid);
    //  setInterval(intervaleid);
    //  show_next_quetion();
  } else if (event.target.id === "answer4") {
    chosen_btn_id = 4;
    // setInterval(show_next_quetion, 1000);
    // show_next_quetion();
    // clearInterval(intervaleid);
    // setInterval(intervaleid);
    // show_next_quetion();
  }
  if (chosen_btn_id in (1, 2, 3, 4)) {
    if (chosen_btn_id == answer) {
      correct_answer++;
    }
  }
});

// submitbtn.addEventListener("click", ()=>{
//   if (chosen_btn_id == answer) {
//     alert();
//   }
// });

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }

let btnstart = () => {
  img_and_parastartid.classList.remove("d-flex");
  img_and_parastartid.style.display = "none";
};
