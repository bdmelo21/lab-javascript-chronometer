
const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
    let twoDigitsMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minUni.innerHTML=twoDigitsMinutes[1];
    minDec.innerHTML=twoDigitsMinutes[0];
}

function printSeconds() {
    let twoDigitsSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secUni.innerHTML=twoDigitsSeconds[1];
    secDec.innerHTML=twoDigitsSeconds[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.classList.remove ("start")
  btnLeft.classList.add ("stop");
  btnLeft.innerHTML='STOP';
  return chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.classList.remove ("reset")
  btnRight.classList.add ("split");
  btnRight.innerHTML= 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.remove ("stop")
  btnLeft.classList.add ("start");
  btnLeft.innerHTML= 'START';
  return chronometer.startClick();
}

function setResetBtn() {
  btnRight.classList.remove("split")
  btnRight.classList.add("reset");
  btnRight.innerHTML='RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) {
    setStopBtn();
    chronometer.startClick(printTime);
  }
  else if (btnLeft.classList.contains("stop")) {
    setStartBtn();
  } // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("reset") ) {
    return setSplitBtn();
  }
  else if (btnRight.classList.contains("split")) {
    return setResetBtn();
  }
});
