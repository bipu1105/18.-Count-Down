let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let counterTime = document.querySelector('.counter-time');
// set the date we are counting down to..thats mean count down will stop on this day
let countDownDate = new Date('december 4 2023 12:00').getTime();
let counterHeading = document.querySelector('.counter-heading h1')

// setInterval method will continuously call counting function in every 1 seconds (1000 milliseconds)
// that will update the count every 1 seconds
var x = setInterval(counting , 1000);

function counting(){
    // get todays date and time
    let now = new Date().getTime();
    // find the distance between now and the count down date
    let different = countDownDate - now;
    // time calculator for days , minutes , hours and seconds 
    let remainingDays = Math.floor( different / (1000* 60 * 60 * 24));
    let remaingHours = Math.floor((different % (1000* 60 * 60 * 24) / (1000* 60 * 60)));
    let remainingMinutes = Math.floor((different % (1000 * 60 * 60) / (1000 * 60)));
    let remainingSeconds = Math.floor((different % (1000 * 60) / 1000));
    // display the result
    days.innerHTML = remainingDays + 'd'
    hours.innerHTML = remaingHours + 'h'
    minutes.innerHTML = remainingMinutes + 'm'
    seconds.innerHTML = remainingSeconds + 's'

    // if the count down is finised then user can visit the website
    if(different <= 0){
        // if the count down is finished then setInterval method will stop updating count down
        clearInterval(x);
        // and counter timer will be hidden
        counterTime.innerHTML = '';
        counterHeading.innerHTML = 'WELCOME TO OUR WEBSITE'
    }
}