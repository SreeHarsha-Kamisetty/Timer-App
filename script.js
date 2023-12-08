let second = document.getElementById('seconds');
var secondsCount = 0;

function updateSeconds() {
    secondsCount++;
    second.innerText = secondsCount;
}
var intervalId;
function startTimer(){
    intervalId = setInterval(updateSeconds, 1000);
}


let stop1 = document.getElementById('stop');
stop1.addEventListener('click', (e) => {
    clearInterval(intervalId);
    secondsCount=0;
    second.innerText = secondsCount;
});
let start1 = document.getElementById('start');
start1.addEventListener('click',()=>{
    startTimer();
})
