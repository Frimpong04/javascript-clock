//selectors
const secondsHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function getTime() {
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    //console.log(second);
    let degToRotate = (second/60 * 360) + 90;
    let minToDeg = (minute/60 * 360) + 90;
    let hourToDeg = (hour/12 * 360) + 90;
    //console.log(degToRotate);
    //ROTATE THE SECOND HANDS
    secondsHand.style.transform = `rotate(${degToRotate}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}


setInterval(getTime,1000);