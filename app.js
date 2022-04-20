setInterval(setdater, 1000)
const hourHand = document.querySelector('[date-hour-hand]')
const minuteHand = document.querySelector('[date-minute-hand]')
const secondHand = document.querySelector('[date-second-hand]')
function setdater(){
  const currentDate = new Date()
  const SecondRotation = currentDate.getSeconds() / 60
  const MinuteRotation = (SecondRotation + currentDate.getMinutes())/ 60
  const HourRotation = (MinuteRotation + currentDate.getHours()) / 12
  Determine(secondHand, SecondRotation)
  Determine(minuteHand, MinuteRotation)
  Determine(hourHand, HourRotation)
}

function Determine(element, RotationRatio){
  element.style.setProperty('--rotation',  RotationRatio * 360)
}