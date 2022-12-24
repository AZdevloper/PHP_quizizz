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
let width = 0;
let current_question = 1;
let current_answer;
let progres_dis_withe = add_to_width; ; 
let show_next_quetion = () => {
  if (current_question <= number_of_questions) {
    let randomNumber = get_random_number(number_of_questions-1, 0);
    // console.log("randomNumber", randomNumber);
    // console.log(questions[randomNumber]);

    let { question, choice1, choice2, choice3, choice4, answer } = questions[randomNumber];
    question_id.innerText = question;
    answer1.innerText = choice1;
    answer2.innerText = choice2;
    answer3.innerText = choice3;
    answer4.innerText = choice4;
    current_answer = answer;

    let per_progresbar = getId("per_progresbar");
    per_progresbar.innerText = progres_dis_withe + " %";
    width += add_to_width;
    elem.style.width = width + "%";
    current_question++;
    progres_dis_withe += add_to_width;
    // remove background green to btns
    for (const btn of clicked_btn) {
      btn.classList.remove("background_green");
      btn.classList.remove("background_red");
    }
  } else {
    let resul_container = getId("resul_container");
  
    let quetion_contenaire = getId("quetion_contenaire");
    quetion_contenaire.style.display = "none";
    resul_container.classList.remove("d-none");
    console.log(correct_answer);

    let div_logo = getId("div_logo");
    div_logo.innerText += correct_answer / number_of_questions *100 +" %";

    toggle();
  }
};


// set intervale
let intervalId = null;
let isRunning = false;
let toggle = () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  } else {
    intervalId = setInterval(show_next_quetion, 5000);
    isRunning = true;
  }
};

toggle();

// setInterval(intervaleid);
let container = getId("answers_container");
let correct_answer = 0;
let clicked_btn = [] ;
// let incorrect_answer = [];
let chosen_btn_id;
container.addEventListener("click", (event) => {
  if (event.target.id === "answer1") {
    chosen_btn_id = 1;
    toggle();
    toggle();
    // show_next_quetion();
  } else if (event.target.id === "answer2") {
    chosen_btn_id = 2;

    toggle();
    toggle();
  } else if (event.target.id === "answer3") {
    chosen_btn_id = 3;
    toggle();
    toggle();
  } else if (event.target.id === "answer4") {
    chosen_btn_id = 4;
    toggle();
    toggle();
  } 
  if ([1, 2, 3, 4].includes(chosen_btn_id)) {
    // console.log("id is", chosen_btn_id);
    // console.log("answer is ", current_answer);

    if (chosen_btn_id == current_answer) {
      correct_answer++;
      event.target.classList.add("background_green");
      clicked_btn.push(event.target);

    }else {
      
      event.target.classList.add("background_red");
      clicked_btn.push(event.target);
    }
  }

});
submitbtn.addEventListener("click",(avent)=>{
 clicked_btn.free();
}

)

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
