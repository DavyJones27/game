let chance = 5;

const decrChance = () => {
  if(chance < 0) {
    console.log("done");
  } else {
    let balls = document.querySelectorAll(".ball");
    balls[chance - 1].style.display = "none";
  }
};

window.addEventListener('click', () => {
  decrChance();
});