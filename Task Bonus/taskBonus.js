let gameShape = document.querySelector(".shape");
let startButton = document.querySelector(".startButton");
let counterBox = document.querySelector(".counter");
let progressBox = document.querySelector(".progress");
let timerHTML = document.querySelector(".elapsed");
var timer;

function calculateNewPosition () {
  const maxWidth = 97;
  const maxHeight = 64;

  let newWidth = Math.floor(Math.random() * (maxWidth - 0)) + 0;
  let newHeight = Math.floor(Math.random() * (maxHeight - 0)) + 0;
  return { newWidth: newWidth + "vw", newHeight: newHeight + "vh" }
}

function createTimer () {
  var seconds = 0;

  function incrementSeconds() {
      seconds += 1;
      counterBox.innerText = seconds;
  }

  timer = setInterval(incrementSeconds, 1000);
}

function handleClick (intervalHandler) {
  let newPosition = calculateNewPosition();
  //console.log(newPosition);

  gameShape.style.top = newPosition.newHeight;
  gameShape.style.left = newPosition.newWidth;

  if(parseInt(progressBox.innerHTML) === 9){
    startButton.disabled = false;
    gameShape.style.display = "none";
    clearInterval(timer);
  }

  if(parseInt(progressBox.innerHTML) < 10)
    progressBox.innerHTML = parseInt(progressBox.innerHTML) + 1;
}

startButton.addEventListener("click", function (){
  createTimer();
  let newPosition = calculateNewPosition();
  //console.log(newPosition);

  gameShape.style.top = newPosition.newHeight;
  gameShape.style.left = newPosition.newWidth;

  counterBox.innerText = 0;
  progressBox.innerHTML = 0;
  gameShape.style.display = "block";
  startButton.disabled = true;
  timerHTML.style.visibility = "visible";

}, {once: false});

gameShape.addEventListener("click", handleClick);