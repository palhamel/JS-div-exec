// rewritten as ES6 arrow function:
// Analog clock:
const analogTime = () => {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const now = new Date();
  // seconds to degrees:
  const seconds = now.getSeconds();
  const secDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDegrees}deg)`;
  // console.log('seconds:', seconds);
  // minutes to degrees:
  const minutes = now.getMinutes();
  const minDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;
  // console.log('min:', minutes)
  // hours to degrees:
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  // console.log('hour:', hours)
};
// run function:
setInterval(analogTime, 1000);

// digital clock:
const digitalTime = () => {
  const date = new Date(); /* creating object of Date class */
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("digital-local-time").innerText =
    hour + " : " + min + " : " + sec; /* adding time to the div */
  // new york, -6
  document.getElementById("new-york-time").innerText = hour - 6 + " : " + min;
  // moscow, +3
  document.getElementById("moscow-time").innerText = hour + 3 + " : " + min;
  // ISS, UTC
  document.getElementById("iss-time").innerText = date.toUTCString();
};
const updateTime = (digits) => {
  if (digits < 10) {
    return "0" + digits;
  } else {
    return digits;
  }
};
// run function:
setInterval(digitalTime, 1000);
