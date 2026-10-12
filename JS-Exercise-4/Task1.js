var dt=new Date();
const date=dt.getDate();
const monthNum=dt.getMonth();
const year=dt.getFullYear();

const monthArr=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const month=monthArr[monthNum];

document.getElementById("currentDate").innerText = `${date}-${month}-${year}`;

function updateTime(){
    var dt=new Date();
    const hour=dt.getHours();
    const min=dt.getMinutes();
    const sec=dt.getSeconds();
    const ms=dt.getMilliseconds();
    document.getElementById("currentTime").innerText=`${hour}:${min}:${sec}:${ms}`
}

setInterval(() => {
    updateTime()
},1);

var startHour=0, startMin=0, startSec=0, startMS=0;
var interval=null;

function updateStopWatch(){
    startMS += 1;

    if (startMS >= 100) {
        startMS = 0;
        startSec+= 1;
    }
    if (startSec >= 60) {
        startSec = 0;
        startMin += 1;
    }
    if (startMin >= 60) {
        startMin = 0;
        startHour += 1;
    }

    document.getElementById("stopWatch").innerText=`${startHour}:${startMin}:${startSec}:${startMS}`;
}

// setInterval(() => {
//     updateStopWatch()
// },1);

const startBtn=document.getElementById("startBtn");
const stopBtn=document.getElementById("stopBtn");
const resumeBtn=document.getElementById("resumeBtn");
const resetBtn=document.getElementById("resetBtn");

// a Start button, on click of which the stopwatch timer will start.
// a Stop button, on click of which the stopwatch timer will stop or pause.
// a Resume button, on click of which the stopwatch timer will resume.
// a Reset button, on click of which the stopwatch timer will reset to zeros.
// Initially when stopwatch timer is not started, Stop, Resume & Reset button will be disabled.
// After the stopwatch timer is started, the Start and Resume button will be disabled, while Stop and Reset will get enabled.
// When the stopwatch timer is paused or stopped, Resume button will get enabled and Start button will be kept disabled until timer is not reset.


startBtn.addEventListener('click', () => {
  interval = setInterval(updateStopWatch, 1);
  startBtn.disabled=true;
  stopBtn.disabled=false;
  resumeBtn.disabled=true;
  resetBtn.disabled=false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.disabled=true;
  stopBtn.disabled=true;
  resumeBtn.disabled=false;
  resetBtn.disabled=true;
});

resumeBtn.addEventListener('click', () => {
  interval = setInterval(updateStopWatch, 1);
  startBtn.disabled=true;
  stopBtn.disabled=false;
  resumeBtn.disabled=true;
  resetBtn.disabled=false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  startHour=0; startMin=0; startSec=0; startMS=0;
  document.getElementById("stopWatch").innerText="00:00:00:00";
  startBtn.disabled=false;
  stopBtn.disabled=true;
  resumeBtn.disabled=false;
  resetBtn.disabled=true;
});
