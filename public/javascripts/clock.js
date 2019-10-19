const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const date = new Date();
let hour = date.getHours() % 12;
let min = date.getMinutes();
let sec = date.getSeconds();

let hourPosition = 30*(hour + min/60)
let minPosition = 6*(min + sec/60)
let secPosition = sec*6

HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

function handUpdate() {

    hourPosition += 3/360
    minPosition += .1
    secPosition += 6

    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
setInterval(function() {
    handUpdate();
}, 1000);
