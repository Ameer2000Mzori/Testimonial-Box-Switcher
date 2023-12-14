// selecting elements
const rangeTimer = document.getElementsByClassName("range-Timer")[0];
const timerEl: any = document.getElementsByClassName("timer-El")[0];
const textH1 = document.getElementsByClassName("text-H1")[0];
const textImg: any = document.getElementsByClassName("text-Img")[0];
const nameP = document.getElementsByClassName("name-P")[0];

// gelobal variables
let counter = 0;
let indexCount = 0;

// our Object Data
const objectData = [
  {
    name: "Jamal ",
    text: "IDHSDFOHJFPOSDFJEOIHJWEF",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Perry Crawford",
    text: "Perry Crawford text is good and bad",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Terrance Morrison",
    text: "IDHSDFOHJFPOSDFJEOIHJWEF text is good and bad",
    img: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    name: "Logan Wagner",
    text: " text is good and bad",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Erik Cook",
    text: "NEW ERIK TEXT",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

// our functions
const startChange = () => {
  setInterval(() => {
    counter += 0.5;
    console.log(counter);
    timerEl.style.width = `${counter}%`;
    if (counter >= 100) {
      counter = 0;
      indexCount += 1;
      checkData();
    }
  }, 25);
};

// display our data function
const displayData = () => {
  let counterObject = objectData[indexCount];
  nameP.textContent = `${counterObject.name}`;
  textH1.textContent = `${counterObject.text}`;
  textImg.src = `${counterObject.img}`;
};

const checkData = () => {
  if (indexCount >= objectData.length) {
    indexCount = 0;
    displayData();
  } else {
    displayData();
  }
};

// our eventlisnters
window.addEventListener("load", () => startChange());
