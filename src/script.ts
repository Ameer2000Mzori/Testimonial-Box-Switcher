// selecting elements
const rangeTimer = document.getElementsByClassName("range-Timer")[0];
const timerEl = document.getElementsByClassName("timer-El")[0];
const textH1 = document.getElementsByClassName("text-H1")[0];
const textImg = document.getElementsByClassName("text-Img")[0];
const nameP = document.getElementsByClassName("name-P")[0];

// gelobal variables
let counter = 0;

// our Object Data
const objectData = [
  {
    name: "Ameer Ameen",
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

// our eventlisnters
window.addEventListener("load", () => {
  console.log("hallo world");
});
