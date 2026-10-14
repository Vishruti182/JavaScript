const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const box3=document.getElementById("box3");
const box4=document.getElementById("box4");
const colors=[
    "#d1d07a", "#82d3cd", "#aaa9e9", "#f19fad",
    "#918cd8", "#dbbb76", "#e994ae", "#d3df90"
];
var index=0;
var clicked=false;

window.addEventListener("DOMContentLoaded",()=>{
    alert("Greetings! Please choose a box.");

    box1.textContent="Click Me First";
    setInterval(()=>{
        let color;
        do{
            color=colors[Math.floor(Math.random()*colors.length)];
        }while(color===box2.style.backgroundColor);
        box2.style.backgroundColor=color;
    },3000);
});

box1.addEventListener("click",()=>{
    if(clicked)
        return;

    clicked=true;
    box3.textContent="Oops something wrong?";
    box4.style.backgroundColor=colors[index];

    setInterval(()=>{
        index=(index+1)%colors.length;
        box4.style.backgroundColor=colors[index];
    }, 5000);
});

window.addEventListener("keydown",(event)=>{
    if(!clicked)
        return;

    if(event.key==="ArrowRight" || event.key==="ArrowUp"){
        index=(index+1)%colors.length;
    }
    else if(event.key==="ArrowLeft" || event.key==="ArrowDown"){
        index=(index-1+colors.length)%colors.length;
    }
    else{
        return;
    }

    box4.style.backgroundColor=colors[index];
});