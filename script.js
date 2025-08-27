let r = 16;
let c = 16;
let checkColor = true;

const grid = document.querySelector(".sketch-grid");
const err = document.querySelector(".error");
const black =document.getElementById("toggle-black");
black.addEventListener("click", function(){
    checkColor = false;
});
const color = document.getElementById("toggle-color");
color.addEventListener("click", function(){
    checkColor = true;
});


const rowin = document.getElementById("rows");
const colin = document.getElementById("columns");
const submit = document.getElementById("submit");


const close = document.getElementById("close");
close.addEventListener("click", function(){
    document.querySelector(".resize").classList.toggle("hide");
    document.querySelector(".container").classList.toggle("hide1");
});

function getRandomHSLColor() {
  const h = Math.floor(Math.random() * 360);  // Hue (0–360)
  console.log(h);
  const s = 70; // Saturation %
  const l = 50; // Lightness %
  return `hsl(${h}, ${s}%, ${l}%)`;
}

console.log(getRandomHSLColor()); // e.g. "hsl(210, 70%, 50%)"

const open = document.getElementById("resize");
open.addEventListener("click", function(){
    document.querySelector(".resize").classList.toggle("hide");
    document.querySelector(".container").classList.toggle("hide1");
    rowin.value=r;
    colin.value=c;
});


submit.addEventListener("click", function(){
    if ( rowin.value >= 10 && rowin.value <= 100 && colin.value >= 10 && colin.value <= 100){
        r = parseInt(rowin.value);
        c = parseInt(colin.value);
        grid.replaceChildren(); // clears everything

        createGrid();
        document.querySelector(".resize").classList.toggle("hide");
        document.querySelector(".container").classList.toggle("hide1");
        rowin.placeholder=r;
        colin.placeholder=c;
    }
    else {
        err.textContent = "Please enter a number between 10 and 100";
    }
});

function createGrid(){
    for(i=1;i<=c;i++){
        const row = document.createElement(`row${i}`)
        row.classList.add("sketch-row");
        for(j=1;j<=r;j++){
            const div = document.createElement(`cell${i}-${j}`);
        div.classList.add("sketch-cell");
        row.appendChild(div);
        div.classList.add("rat");
        div.addEventListener("mouseover", function(){
            if (checkColor==true){
                div.style.backgroundColor = getRandomHSLColor();
            }
            else {
                div.style.backgroundColor = "black";
            }
        });
        //div.textContent = `${i}${j}`;
    }
    grid.appendChild(row);
}};
createGrid();
const clr = document.querySelector("#clear");
clr.addEventListener("click", function(){
    for(i=1;i<=c;i++){
        for(j=1;j<=r;j++){
            const div = document.querySelector(`cell${i}-${j}`);
            div.style.backgroundColor = "white";
        }
    }
});



