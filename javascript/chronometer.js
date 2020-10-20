class Chronometer {
 
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
    // ... your code goes here
  }
  startClick(callback) {

    setInterval(()=>{
      this.currentTime++;
      if (callback)callback()}, 1000);
    
    // ... your code goes here
  }
  getMinutes () {
    return parseInt(this.currentTime/60);
  }
  getSeconds() {
    if(this.currentTime===0) {
      return 0;
    }
    else if (this.currentTime%60!==0) {
      return (this.currentTime%60);
    }
    // ... your code goes here
  }
  twoDigitsNumber(value) {
    if (value<10) {
      return `0${value}`;
    }
    return `${value}`;
  }
    // ... your code goes here
  stopClick() {
    return clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    return this.currentTime=0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if (min < 10) {
      return `${0}${min}:${0}${sec}`;
    } else {
      return `${min}:${sec}`;
    }
    // ... your code goes here
  }
}
