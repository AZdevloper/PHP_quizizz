import { questions } from "./ques.js";

let getElement = (id) => {
  return document.getElementById(id);
};

let btnstartid = getElement("btnstart");
let img_and_parastartid = getElement("img_and_parastart");

let question_id = getElement("question_id");
let answer1 = getElement("answer1");
let answer2 = getElement("answer2");
let answer3 = getElement("answer3");
let answer4 = getElement("answer4");

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
// insert into counterlet
// let x = 10;
// let insert_into = ()=>{
//    Timer_down.innerText = x;
//    ++x;
//   if (x < 0) {
//       // clearInterval(intervale1);
//       x = 10;
//       show_next_quetion();
//     }
// }
// count_Down

// let time_for_each_question = 10000;

// let intervale1 ;
// let start_counter_down = ()=>{
//    intervale1 = setInterval(() => {
//     //  x=x-1;
//    insert_into();
 
//   }, 1000);
// }
// for (let x = 0; x < 10; x++) {
//  setTimeout(show_next_quetion,1000);
  
// }
// show_next_quetion
let add_to_width = 100 / number_of_questions;
let width = 0;
let current_question = 1;
let current_answer;
let progres_dis_withe = add_to_width; ; 
let quetion_contenaire = getElement("quetion_contenaire");

let show_next_quetion = () => {
  if (current_question <= number_of_questions) {
    // start_counter_down();
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

    let per_progresbar = getElement("per_progresbar");
    per_progresbar.innerText = progres_dis_withe + " %";
    width += add_to_width;
    elem.style.width = width + "%";
    current_question++;
    progres_dis_withe += add_to_width;
    // remove background green to btns
    for (const btn of clicked_btns) {
      btn.classList.remove("background_green");
      btn.classList.remove("background_red");
    }
  } else {
    let info_cyrcl2 = getElement("info_cyrcl2");
    info_cyrcl2.classList.add("steper_line_background_2");
    let info_cyrcl3 = getElement("info_cyrcl3");
    info_cyrcl3.classList.add('steper_cyrcl_background');
    let resul_container = getElement("resul_container");
  
    quetion_contenaire.style.display = "none";
    resul_container.classList.remove("d-none");
    console.log(result);

    let div_logo = getElement("div_logo");
    div_logo.innerText += result / number_of_questions *100 +" %";
    if ((result / number_of_questions) * 100 >= 50) {
        let result_div = getElement("result_div");
        console.log(result_div);
        result_div.insertAdjacentHTML(
          "beforeend",
          '<br><i class="happy_emoji">Congratulations! You passed the quiz.</i>'
        );
        //  clearInterval(intervale1);

    }else {
        let result_div = getElement("result_div");
        console.log(result_div);
        result_div.insertAdjacentHTML(
          "beforeend",
          '<i class="angry_emoji">Bad Result try again.</i>'
        );
      // clearInterval(intervale1);
    }
   
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
    intervalId = setInterval(show_next_quetion, time_for_each_question);
    isRunning = true;
  }
};


// check answer function 
let clicked_btns = [] ;
let result = 0;
let check_answer = (chosen_btn_id,shosen_answer)=>{
   let chosen_btn = getElement(chosen_btn_id);
    
   if (shosen_answer == current_answer) {
    result++;
    chosen_btn.classList.add('background_green');
    clicked_btns.push(chosen_btn);
  }else { 
    chosen_btn.classList.add("background_red");    
    clicked_btns.push(chosen_btn);
  }

}
// setInterval(intervaleid);
let container = getElement("answers_container");
let chosen_btn_id;
container.addEventListener("click", (event) => {
  if (event.target.id === "answer1") {
    
  //  let shosen_answer = 1;
  //  let chosen_btn_id = "answer1";
    check_answer("answer1",1);
    setTimeout(show_next_quetion, 1000); 
    toggle();
    toggle();
  } else if (event.target.id === "answer2") {
    check_answer("answer2",2);
    setTimeout(show_next_quetion, 1000); 
    toggle();
    toggle();
  } else if (event.target.id === "answer3") {
    check_answer("answer3",3);
    setTimeout(show_next_quetion, 1000); 
    toggle();
    toggle();
  } else if (event.target.id === "answer4") {
    check_answer("answer4",4);
    setTimeout(show_next_quetion, 1000); 
    toggle();
    toggle();
  } 

});

// submitbtn.addEventListener("click",(avent)=>{
//  clicked_btns.free();
// }

// )
let info_cyrcl1 = getElement("info_cyrcl1");
info_cyrcl1.classList.add('steper_cyrcl_background');



btnstart.addEventListener("click",()=>{
  let start_quiz = ()=>{
    counter.classList.add("d-none");
    info_cyrcl1.classList.add('steper_line_background_1');
    let info_cyrcl2 = getElement("info_cyrcl2");
    info_cyrcl2.classList.add("steper_cyrcl_background");

    home.classList.add('d-none');
    quetion_contenaire.classList.remove("d-none");
    // toggle();
    // start_counter_down();
    //  let intervale1;

    // let start_counter_down = ()=>{
       
    // }

    for (let index = 0; index <= number_of_questions; index++) {
      // start_counter_down();
      setTimeout(() => {
          show_next_quetion();

          let count_down_duration = 10;
          for (let j = 0; j < 10; j++) {
            setTimeout(() => {
              Timer_down.innerText = count_down_duration;
              --count_down_duration;
            }, 1000*j);
          }
      }, 10000*index);
    }
    
     
  }
  let counter = getElement("counter");
  counter.classList.remove("d-none");
  let counter_p = getElement("counter_p");
  let x =3;
  let intervale =  setInterval(() => {
    counter_p.innerText = x;
    x--;
    if(x<-1) {
      clearInterval(intervale);
      start_quiz();
    }
  }, 1000);
  

 

  
  
});
