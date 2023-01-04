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

var timerid;
function timer() {
  let count_down_duration =10;
  timerid = setInterval(() => {
    Timer_down.innerText = count_down_duration;
    --count_down_duration;
    if (count_down_duration < 0) {
      clearInterval(timerid);
      show_next_quetion();
    }
  }, 1000);
}
// get data with ajax
let allData;
function getData() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let jsonResponse = JSON.parse(this.responseText);
      allData = jsonResponse;
    }
  };

  xhttp.open(
    "GET",
    `http://localhost/PHP_quizizz/PHPscripts/scripts.php?`,
    false
  );
  xhttp.send();
}
getData();

// show_next_quetion
let number_of_questions = allData.length;
let add_to_width = Math.floor(100 / number_of_questions);
let width = 0;
let current_question = 1;
let current_answer;
let progres_dis_withe = add_to_width;
let quetion_contenaire = getElement("quetion_contenaire");

let show_next_quetion = () => {
  console.log("all data : ", allData);

  if (current_question <= number_of_questions) {
    clearInterval(timerid);
    timer();

    let randomNumber = get_random_number(number_of_questions - 1, 0);
    console.log("randomNumber :", randomNumber);

    let { questionContent, idCorrectAnswer, questionChoiceContent } =
      allData[randomNumber];
    question_id.innerText = questionContent;
    answer1.innerText = questionChoiceContent[0].replace(/&lt;/g, "<");
    answer2.innerText = questionChoiceContent[1].replace(/&lt;/g, "<");
    answer3.innerText = questionChoiceContent[2].replace(/&lt;/g, "<");
    answer4.innerText = questionChoiceContent[3].replace(/&lt;/g, "<");
    current_answer = idCorrectAnswer;
    console.log("idCorrectAnswer : ", idCorrectAnswer);

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
    clearInterval(timerid);
    let info_cyrcl2 = getElement("info_cyrcl2");
    info_cyrcl2.classList.add("steper_line_background_2");
    let info_cyrcl3 = getElement("info_cyrcl3");
    info_cyrcl3.classList.add("steper_cyrcl_background");
    let resul_container = getElement("resul_container");

    quetion_contenaire.style.display = "none";
    resul_container.classList.remove("d-none");

    let div_logo = getElement("div_logo");
    let score = Math.floor(((result * 1) / number_of_questions) * 100) + " %";
    div_logo.innerText +=score;
    console.log("score :", score)
    let username = inputName.value;
      console.log("username :",username)
      
    $.get(`http://localhost/PHP_quizizz/PHPscripts/scripts.php?score=${score}&username=${username}`, function(data, status){
    });
      

    if ((result / number_of_questions) * 100 >= 50) {
      let result_div = getElement("result_div");
      result_div.insertAdjacentHTML(
        "beforeend",
        '<br><i class="happy_emoji">Congratulations! You passed the quiz.</i>'
      );
      clearInterval(timerid);
    } else {
      let result_div = getElement("result_div");
      console.log(result_div);
      result_div.insertAdjacentHTML(
        "beforeend",
        '<i class="angry_emoji">Bad Result try again.</i>'
      );
      clearInterval(timerid);
    }
  }
};

// check answer function
let clicked_btns = [];
let result = 0;
let check_answer = (chosen_btn_id, shosen_answer) => {
  let chosen_btn = getElement(chosen_btn_id);

  if (shosen_answer == current_answer) {
    result++;
    chosen_btn.classList.add("background_green");
    clicked_btns.push(chosen_btn);
  } else {
    chosen_btn.classList.add("background_red");
    clicked_btns.push(chosen_btn);
  }
};
// setInterval(intervaleid);
let container = getElement("answers_container");
let chosen_btn_id;
container.addEventListener("click", (event) => {
  if (event.target.id === "answer1") {
    check_answer("answer1", 1);
    setTimeout(show_next_quetion, 1000);
    clearInterval(timerid);
    timer();

  } else if (event.target.id === "answer2") {
    check_answer("answer2", 2);
    setTimeout(show_next_quetion, 1000);
    clearInterval(timerid);
    timer();

  } else if (event.target.id === "answer3") {
    check_answer("answer3", 3);
    setTimeout(show_next_quetion, 1000);
    clearInterval(timerid);
    timer();

  } else if (event.target.id === "answer4") {
    check_answer("answer4", 4);
    setTimeout(show_next_quetion, 1000);
    clearInterval(timerid);
    timer();

  }
});


let info_cyrcl1 = getElement("info_cyrcl1");
info_cyrcl1.classList.add("steper_cyrcl_background");


let start_quiz = () => {
  counter.classList.add("d-none");
  info_cyrcl1.classList.add("steper_line_background_1");
  let info_cyrcl2 = getElement("info_cyrcl2");
  info_cyrcl2.classList.add("steper_cyrcl_background");

  home.classList.add("d-none");
  quetion_contenaire.classList.remove("d-none");

  show_next_quetion();
};
// start_quiz();
btnstart.addEventListener("click", () => {
  if (inputName.value == "") {
    $("#inputName").addClass("inputNameNull");
  } else {
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
  }



  // fetch('Classes/dbConnection.class.php')
  // .then((respons)=>console.log()).then((data)=>{
  //   console.log(data);

});
