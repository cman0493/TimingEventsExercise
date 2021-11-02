// 1
setTimeout(() => {
    const first = document.querySelector("#first");
    const p1 = document.createElement("p");
    p1.innerText = "Hi";
    first.append(p1);
  }, 1000);
  
// 2
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    // Nested setTimeout
    setTimeout(() => {
      const p3 = document.createElement(`p`);
      p3.innerText = `Two`;
      div2.append(p3);
    }, 1000);
  }, 2000);
  
// 3
  let counter = 1;
  let time = setInterval(() => {
    console.log(counter);
    counter++;
  }, 1000);

  const stop = document.querySelector(`button`);
  stop.addEventListener(`click`, () => {
    clearInterval(time);
  });

  // 4
  const countdown = document.querySelector(`#countdown`);
  const p4 = document.createElement(`p`);
  p4.innerHTML = `2:00`;
  countdown.append(p4);
  
  const startTime = 2;
  let time1 = startTime * 60;
  function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time1 % 60;
    seconds = seconds < 10 ? `0` + seconds : seconds;
    countdown.innerHTML = `${minutes} : ${seconds}`;
    time--;
  }
  
  setInterval(() => {
    updateCountdown();
    if (time1 <= 0){
      countdown.innerHTML = `TIME IS UP`;
    }
  }, 1000);