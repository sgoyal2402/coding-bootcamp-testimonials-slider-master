//jshint esversion:6

const text = document.querySelectorAll(".text");
const pic = document.querySelector(".picture");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click",(event)=>{
    toogle_text();
    toogle_pic();
});

next.addEventListener("click",(event)=>{
    toogle_text();
    toogle_pic();
});



function toogle_pic() {
    pic.classList.toggle("one");
    pic.classList.toggle("two");
}

function toogle_text() {
    text[0].classList.toggle("hidden");
    text[1].classList.toggle("hidden");
}

