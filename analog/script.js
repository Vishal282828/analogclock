function rotateClockHands() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const hourRotation = 30 * hours + minutes / 2; // Each hour is 30 degrees (360/12), and for each hour, the minute hand moves by 0.5 degrees (30/60)
    const minuteRotation = 6 * minutes; // Each minute is 6 degrees (360/60)
    const secondRotation = 6 * seconds; // Each second is 6 degrees (360/60)
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(rotateClockHands, 1000);