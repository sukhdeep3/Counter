let enterValue = document.getElementById("search");
let btn = document.getElementById("search-btn");
let current1 = document.querySelector(".current1");
let current2 = document.querySelector(".current2");
let current3 = document.querySelector(".current3");
let current4 = document.querySelector(".current4");
let current5 = document.querySelector(".current5");
let next1 = document.querySelector(".next1");
let next2 = document.querySelector(".next2");
let next3 = document.querySelector(".next3");
let next4 = document.querySelector(".next4");
let next5 = document.querySelector(".next5");

// current1.innerText = 0;
let array = new Array(0, 0, 0, 0, 0);

let clearSetInterval = false;

oneFlag = false;
twoFlag = false;
threeFlag = false;
fourFlag = false;
fiveFlag = false;

// btn.addEventListener("click", counting);

function refresh() {
  enterValue.value = "";
  current1.innerText = 0;
  current2.innerText = 0;
  current3.innerText = 0;
  current4.innerText = 0;
  current5.innerText = 0;
  next1.innerText = 0;
  next2.innerText = 0;
  next3.innerText = 0;
  next4.innerText = 0;
  next5.innerText = 0;
  oneFlag = false;
  twoFlag = false;
  threeFlag = false;
  fourFlag = false;
  fiveFlag = false;
}

function end() {
  if (current1.innerText && next1.innerText >= 0) {
    current1.innerText = 0;
    next1.innerText = 0;
  }
}

btn.addEventListener("click", end);

function startCounter() {
  let interval = setInterval(function () {
    if (clearSetInterval) {
      return clearInterval(interval);
    }
    next1.classList.add("animate");
    // console.log("hello3", next1.innerHTML);

    setTimeout(() => {
      next1.classList.remove("animate");
      // console.log("hello4", next1.innerHTML);
    }, 860);
  }, 1000);
}

btn.addEventListener("click", startCounter);

btn.addEventListener("click", () => {
  current1.innerHTML = 0;
  next1.innerHTML = 0;

  current2.innerHTML = 0;
  next2.innerHTML = 0;

  current3.innerHTML = 0;
  next3.innerHTML = 0;

  current4.innerHTML = 0;
  next4.innerHTML = 0;

  current5.innerHTML = 0;
  next5.innerHTML = 0;

  counting();
});

function counting() {
  if (enterValue.value <= 0 || enterValue.value >= 9999) {
    clearSetInterval = true;
    alert("Please enter valid value");
    enterValue.value = "";
    return;
  }
  clearSetInterval = false;

  let upcomingValue = enterValue.value;

  var wordLength = String(upcomingValue.length);
  if (wordLength == 1) {
    twoFlag = true;
  } else if (wordLength == 2) {
    threeFlag = true;
  } else if (wordLength == 3) {
    fourFlag = true;
  } else if (wordLength == 4) {
    fiveFlag = true;
  }

  for (let i = 0; i < 5; i++) {
    let lastValue = upcomingValue % 10;

    array[i] = lastValue;

    upcomingValue = parseInt(upcomingValue / 10);
  }

  let interval = setInterval(() => {
    current1.innerText++;
    next1.innerText++;

    if (current1.innerText == 10) {
      twoDigits();
    }

    if (twoFlag) {
      if (current1.innerText == array[0]) {
        oneFlag = true;
        clearSetInterval = true;
        clearInterval(interval);
        setTimeout(() => {
          alert("Counter completed");
          refresh();
        }, 100);
      }
    }
  }, 1000);
}

function twoDigits() {
  if (current1.innerText && next1.innerText == 10) {
    current2.innerText++;
    next2.innerText++;
    current1.innerText = 0;
    next1.innerText = 0;

    if (current2.innerText == 10) {
      threeDigits();
    }

    if (threeFlag) {
      if (next2.innerText == array[1]) {
        twoFlag = true;
      }
    }
  }
}

function threeDigits() {
  if (current2.innerText && next2.innerText == 10) {
    current3.innerText++;
    next3.innerText++;
    current2.innerText = 0;
    next2.innerText = 0;

    if (current3.innerText == 10) {
      fourthDigits();
    }

    if (fourFlag) {
      if (next3.innerText == array[2]) {
        threeFlag = true;
      }
    }
  }
}

function fourthDigits() {
  if (current3.innerText && next3.innerText == 10) {
    current4.innerText++;
    next4.innerText++;
    current3.innerText = 0;
    next3.innerText = 0;

    if (current4.innerText == 10) {
      fifthDigits();
    }

    if (fiveFlag) {
      if (next4.innerText == array[3]) {
        fourFlag = true;
      }
    }
  }
}

function fifthDigits() {
  if (current4.innerText && next4.innerText == 10) {
    current5.innerText++;
    next5.innerText++;
    current4.innerText = 0;
    next4.innerText = 0;

    if (next5.innerText == array[4]) {
      fiveFlag = true;
    }
  }
}
