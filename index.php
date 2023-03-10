

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PHP_Quizizz</title>
  <!-- bootstrap style -->
  <link rel="stylesheet" href="assets/css/vendor.min.css" />
  <link rel="stylesheet" href="assets/css/default/app.min.css" />
  <!-- sass style -->
  <link rel="stylesheet" href="assets/css/sass_style/main.css" />
</head>

<body>
  <div class="div_logo d-flex">
    <img class="img_logo shadow rounded-circle" src="assets/img/logo/Mia & Ali(1)-modified.png" alt="" />
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <ol class="c-stepper">
      <li class="c-stepper__item" id="info_cyrcl1">
        <h3 class="c-stepper__title" id="info_line">info</h3>
      </li>
      <!-- Other steps -->
      <li class="c-stepper__item" id="info_cyrcl2">
        <h3 class="c-stepper__title" id="Quiz">Quiz</h3>
      </li>
      <li class="c-stepper__item" id="info_cyrcl3">
        <h3 class="c-stepper__title" id="resulte">result</h3>
      </li>
    </ol>
  </div>
  <div class="d-flex w-100 h-75">
    <div class="container-fluid cont_fluid d-flex justify-content-center align-items-center flex-column">
      <div class="custom-shape-divider-top-1671474662">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25" class="shape-fill"></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5" class="shape-fill"></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"></path>
        </svg>
      </div>

      <div class="sectionCenter d-flex justify-content-between " id="home">
        <article class=" align-self-center">
          <h1 id="potTextHer"> Welcome to PHP Quizizz! Practice and improve your PHP
            skills with our resources and challenges.
            Contact us if you need any assistance. We're here to help you
            succeed as a developer</h1>

          <div>
            <input type="text" placeholder=" enter your name" id="inputName" required>
            <button id="btnstart" class="btn btn btn-primary"> start now </button>
          </div>
        </article>
        <img id="" class=" bg-none opacity-300" src="assets/img/cover/Mia___Ali_2_-removebg-preview.png" alt="">

      </div>


      <div
        class="row g-5 d-none  flex-column justify-content-center align-items-center w-50 h-75 p-1 rounded-3 text-center answers"
        id="quetion_contenaire">
        <div class=" col-13  m-2 d-flex  align-items-center" id="Timer_down_container">
          <div id="" class="per_progresbar">
            <p > Timer Down: </p>
            <span id="Timer_down"> </span>
          </div>
        </div>
        <div class=" col-13  m-2 d-flex  align-items-center" id="myProgress">
          <div id="myBar">
            <p  id="per_progresbar"></p>
          </div>
        </div>
        <div class="col-11 h-10 p-2 quation">
          <h1 id="question_id"></h1>
        </div>
        <div class="col-11 p-0  answers">
          <div class="row justify-content-around  " id="answers_container">
            <div class="col-5 ">
              <div class="row g-4 flex-column ">
                <div class=" col p-1  rounded-pill text-center d-flex answers_item ">
                  <!-- <input type="checkbox" id="checkbox1" name="" class="" > -->
                  <button class="btn rounded-pill  w-100" id="answer1"></button>
                </div>
                <div class="col  p-1  rounded-pill text-center d-flex respons_item answers_item ">
                  <!-- <input type="checkbox" id="checkbox2" name="" class="checkbox" > -->
                  <button class="btn rounded-pill  w-100" id="answer2"></button>
                </div>
              </div>
            </div>
            <div class="col-5 ">
              <div class="row g-4 flex-column ">

                <div class="col p-1  rounded-pill text-center d-flex answers_item">
                  <!-- <input type="checkbox" id="checkbox3" name="" > -->
                  <button class="btn rounded-pill  w-100" id="answer3"></button>
                </div>
                <div class="col  p-1  rounded-pill text-center d-flex  answers_item" id="k2">
                  <!-- <input type="checkbox" id="checkbox4" name="" > -->
                  <button class="btn rounded-pill  w-100" id="answer4"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" w-50 h-50 d-flex d-none resul_container justify-content-center " id="resul_container">
        <div>
          <img class="w-100px h-100px shadow rounded-circle resulte_logo_img"
            src="assets/img/logo/Mia & Ali(1)-modified.png" alt="" />
          <div class=" div_logo d-flex align-content-center " id="result_div">
            <h1 class=" f-w-600 fs-19px  ">YOUR SCORE IS : <span id="div_logo"></span> </h1>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div id="counter" class="d-none ">
    <p id="counter_p"></p>

  </div>
  <!-- <script src="/assets/js/app.min.js"></script>
    <script src="/assets/js/vendor.min.js"></script> -->
  <script src="assets/js/jquery.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/ques.js" type="module"></script>


  <script src="assets/js/main.js" type="module"></script>
</body>

</html>