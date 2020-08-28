let chance = 5;
let questionCount = 0;
let score = 0
let paused = false;
var angle;
const pointer = document.querySelector(".pointer__img");
var chosen; // user selection is stored in this
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = 200;

const msg = document.querySelector(".msg-txt");

const drawBasket = () => {
  const basket1 = document.getElementById('basket-1');
  const basket2 = document.getElementById('basket-2');
  const basket3 = document.getElementById('basket-3');
  const basket4 = document.getElementById('basket-4');
  const width = canvas.width; 
  ctx.drawImage(basket1, (0.1 * width - 200/2), 20, 200, 200);
  ctx.drawImage(basket2, (0.35 * width - 200/2), 20, 200, 200);
  ctx.drawImage(basket3, (0.65 * width - 200/2), 20, 200, 200);
  ctx.drawImage(basket4, (0.9 * width - 200/2), 20, 200, 200);
}

const decrChance = () => {
  if(chance < 0) {
    console.log("done");
  } else {
    let balls = document.querySelectorAll(".ball");
    balls[chance - 1].style.opacity = "0";
  }
}

let questions = [], options = [[]], answers = [];
// add a loop here to add questions and all

// for testing...
questions = ['Whales can live a long time. How long can the oldest whale species live?',
'Which of the below countries continue to commercially whale today?', ];
options = 
  [['100 years', '200 years', '50 years', '75 years'], 
  ['Japan', 'Norway', 'Iceland', 'All of the above '], ];
answers = [2, 4, ];
// comment line 19-24 for acutal questons

setQuestion = () => {
  const questionTxt = document.querySelector('.question-txt');
  const optionA = document.querySelector('.option-a');
  const optionB = document.querySelector('.option-b');
  const optionC = document.querySelector('.option-c');
  const optionD = document.querySelector('.option-d');
  if(chance != 0) {
    questionTxt.innerHTML = questions[0];
    let i = 0;
    optionA.innerHTML = "A. " + options[questionCount][i++];
    optionB.innerHTML = "B. " + options[questionCount][i++];
    optionC.innerHTML = "C. " + options[questionCount][i++];
    optionD.innerHTML = "D. " + options[questionCount][i];
  } else {
    //game over msg
  }
}

const checkAns = () => {
  var correct = false;
  // setTimeout(()=> {
  //   //todo
  // }, 3000);
}



const throwBall = ()=> {
  msg.style.animation = "";
  msg.innerHTML="";

  var str = " 3s forwards";
  if(angle>=-60 && angle <-40) {
    str = "throwBallToA" + str;
    chosen = "A";
  } else if(angle>= -40 && angle < 0) {
    str = "throwBallToB" + str;
    chosen = "B";
  } else if(angle>= 0 && angle < 40) {
    str = "throwBallToC" + str;
    chosen = "C";
  } else if(angle>= 40 && angle <= 60) {
    str = "throwBallToD" + str;
    chosen = "D";
  }
  console.log('throwBall called');
  document.querySelector(".ready-ball__img").style.animation = str;
  pointer.classList.remove('paused');

  checkAns();
}


const app = () => {
  setQuestion();
  window.addEventListener('click',()=> {
    pointer.classList.add('paused');
    var st = window.getComputedStyle(pointer, null); 
    var tr = st.getPropertyValue("transform");

    var values = tr.split('(')[1],
    values = values.split(')')[0],
    values = values.split(',');

    var b = values[1];

    angle = Math.round(Math.asin(b) * (180/Math.PI));
    console.log(angle);
    throwBall();
  });
}

app();
