let stop = document.getElementById('stop');
let start = document.getElementById('start');
let all = document.getElementById('full');
let sec = document.getElementById('sec');
let min = document.getElementById('min');
let mull = document.getElementById('mull');
let reset = document.getElementById('reset');
let pauseE = document.getElementById('pause');

let count = 1;
let minuts = 0;
let second = 0;
let mullsecond = 0;
let intervalId = null;

stop.addEventListener('click', stoped);
start.addEventListener('click', startp);
reset.addEventListener('click', resett);
pauseE.addEventListener('click', pause);

function startp() {
  if (intervalId !== null) return;
  intervalId = setInterval(function () {
    ++mullsecond;
    if (mullsecond == 100) {
      mullsecond = 0;
      ++second;
    }
    if (second == 60) {
      second = 0;
      ++minuts;
    }
    sec.textContent = second > 9 ? second : `0${second}`;
    mull.textContent = mullsecond > 9 ? mullsecond : `0${mullsecond}`;
    min.textContent = minuts > 9 ? minuts : `0${minuts}`;
  }, 10);
}

function pause() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function stoped() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  let x = document.createElement('span');
  let text = document.createTextNode(`Lap{${count} }  ${minuts} :${second} :${mullsecond}`);
  x.classList.add('timelist');
  x.appendChild(text);
  all.appendChild(x);
  ++count;
}

function resett() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  minuts = 0;
  second = 0;
  mullsecond = 0;
  sec.textContent = `0${second}`;
  mull.textContent = `0${mullsecond}`;
  min.textContent = `0${minuts}`;
}