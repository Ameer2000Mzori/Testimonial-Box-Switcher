// selecting elements
var rangeTimer = document.getElementsByClassName("range-Timer")[0];
var timerEl = document.getElementsByClassName("timer-El")[0];
var textH1 = document.getElementsByClassName("text-H1")[0];
var textImg = document.getElementsByClassName("text-Img")[0];
var nameP = document.getElementsByClassName("name-P")[0];
// gelobal variables
var counter = 0;
var indexCount = 0;
// our Object Data
var objectData = [
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
var startChange = function () {
    setInterval(function () {
        counter += 0.5;
        console.log(counter);
        timerEl.style.width = "".concat(counter, "%");
        if (counter >= 100) {
            counter = 0;
        }
    }, 25);
};
// startChange();
// our eventlisnters
window.addEventListener("load", function () { return startChange; });
