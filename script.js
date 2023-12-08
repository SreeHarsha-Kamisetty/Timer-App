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
    intervalId = setInterval(updateSeconds, 1);
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
