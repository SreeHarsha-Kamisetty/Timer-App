// Code for StopWatch

let second = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');
let days = document.getElementById('days')
var secondsCount = 0;
var minscount =0;
var hourscount = 0;
var dayscount =0;
let started = false;
function updateSeconds() {
    secondsCount++;
    second.innerText = secondsCount;
    if(secondsCount == 60){
        minscount++;
        minutes.innerText = minscount;
        secondsCount =0;
    }
    if(minscount == 60){
        hourscount++;
        minscount =0;
        hours.innerText = hourscount;
        minutes.innerText = minscount
    }
    if(hourscount == 24){
        dayscount++;
        hourscount = 0;
        days.innerText = dayscount;
        hours.innerText = hourscount;
    }
}
var intervalId;
function startTimer(){
    intervalId = setInterval(updateSeconds, 1000);
}


let stop1 = document.getElementById('stop');
stop1.addEventListener('click', (e) => {
    clearInterval(intervalId);
    started = false;
   
});
let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    clearInterval(intervalId);
    secondsCount=0;
    second.innerText = secondsCount;
    started = false;
    minscount = 0;
    minutes.innerText = minscount;
    hourscount = 0;
    hours.innerText =hourscount;
    dayscount =0;
    days.innerText = dayscount;
})
let start1 = document.getElementById('start');
start1.addEventListener('click',()=>{
    if(!started){
        startTimer();
        started = true;
    }
    
    
})

// Code for Timer
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;
let timerDays = 0;

let T_days = document.getElementById('timer-days')
let T_hours = document.getElementById('timer-hours');
let T_mins = document.getElementById('timer-minutes');
let T_secs = document.getElementById('timer-seconds');

let minsIncreaseBtn = document.getElementById('timer-increase');
let minsDecreaseBtn = document.getElementById('timer-decrease');
let timerStartBtn = document.getElementById('timer-start');
let timerStopBtn = document.getElementById('timer-stop');
let timerResetBtn = document.getElementById('timer-reset');
function MinsIncrease(){
    timerMinutes++;
    // if(timerMinutes%60 ==0){
        
    //     console.log(timerMinutes)
    //     timerHours++;
    // }
    timerHours = Math.floor(timerMinutes/60);
    timerDays = Math.floor(timerHours/24);
    // if(timerHours == 24){
    //     timerHours = 0;
    //     timerDays++
    // }
    T_days.innerText = timerDays;
    T_hours.innerText = timerHours;
    T_mins.innerText = timerMinutes%60;
    console.log(timerMinutes)
}
function MinsDecrease(){
    if(timerMinutes ==0){
        clearInterval(interval);
        console.log("Timer stopped");
    }
    if(timerMinutes>0 && timerHours>=0){
        timerMinutes--;
        T_mins.innerText = timerMinutes%60;
        T_hours.innerText = Math.floor(timerMinutes/60);
    }
}
minsIncreaseBtn.addEventListener('click',()=>{
    MinsIncrease();
})
minsDecreaseBtn.addEventListener('click',() =>{
    MinsDecrease();
})
timerMinutes = T_mins.innerText
console.log(timerMinutes)

timerStartBtn.addEventListener('click',()=>{
   TimerStart();
})
var interval;
function TimerStart(){
     interval = setInterval(MinsDecrease,1000);
}

