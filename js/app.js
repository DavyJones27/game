let chance = 5;
let questionCount = 0;
let score = 0
let paused = false;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;


const decrChance = () => {
  if(chance < 0) {
    console.log("done");
  } else {
    let balls = document.querySelectorAll(".ball");
    balls[chance - 1].style.opacity = "0";
  }
};

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
  // todo
  setTimeout(()=> {
    pointer.classList.remove('paused');
  }, 3000);
  return;
};

// canvas stuff
const drawBasket = () => {
  const basketImg = document.getElementById('basketImg');
  const basket = { 
    w: (0.15*canvas.width), 
    h: (0.15*canvas.width),
    x: (0.05*canvas.width), 
    y: 20,
    dx: 0 };
  for(let i = 0; i < 4; i++) {
    ctx.drawImage(basketImg, basket.x + basket.dx, basket.y, basket.w, basket.h);
    basket.dx += 0.25*canvas.width;
  }
};

const drawBall = () => {
  const ballImg = document.getElementById('ball-img');
  const ball = { 
    w: 80, 
    h: 80,
    x: (canvas.width/2 - 40), 
    y: (canvas.height - 100),
    dx: 0,
    dy: 0 
  };
  
    ctx.drawImage(ballImg, ball.x + ball.dx, ball.y, ball.w, ball.h);
}

const pointerImg = document.getElementById('pointer-img');
const pointer = { 
  w: 80, 
  h: 80,
  x: (canvas.width/2 - 40), 
  y: (canvas.height - 200),
  deg: 20
};

const drawPointer = () => {
  ctx.drawImage(pointerImg, pointer.x, pointer.y, pointer.w, pointer.h);
  // window.requestAnimationFrame(animatePointer);
};

function animatePointer() {
  ctx.rotate(10 * Math.PI / 180);
  drawPointer();
  ctx.save();
}



const app = () => {
  setQuestion();
};

app();
