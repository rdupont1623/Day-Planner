const timer = document.querySelector("#timer")

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timeId;
let userBirthday;


$('#shipit').on("click", countMachine())


    function countMachine(){
    let da = $('#birthday').val().split("-");
    let d = da[2];
    let m = da[1];
    let y = da[0];
    const userBirthday = new Date( m + "-" + d + "-" + y);

    const currentDay = new Date();
    const difference = userBirthday - currentDay;

    if(difference <= 0){
        timer.innerHTML = "Happy Birthday!!!"
        clearInterval(countMachine)
    return    
    }
    if (difference <= -currentDay ) {
        timer.innerHTML = "Your birthday will come around next year!"
        clearInterval(countMachine)
    return
    }
    
    const days = Math.floor(difference/day)
    const hours = Math.floor((difference % day) / hour)
    const minutes = Math.floor((difference % hour) / minute)
    const seconds = Math.floor((difference % minute) / second)

    timer.innerHTML = ` ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
};

timeId = setInterval(countMachine, second);

