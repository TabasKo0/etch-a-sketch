let r = 20;
let c = 20;

const grid = document.querySelector(".sketch-grid");
const err = document.querySelector(".error");

const rowin = document.getElementById("rows");
const colin = document.getElementById("columns");
const submit = document.getElementById("submit");

const close = document.getElementById("close");
close.addEventListener("click", function(){
    document.querySelector(".resize").classList.toggle("hide");
    document.querySelector(".container").classList.toggle("hide1");
});

const open = document.getElementById("resize");
open.addEventListener("click", function(){
    document.querySelector(".resize").classList.toggle("hide");
    document.querySelector(".container").classList.toggle("hide1");
});


submit.addEventListener("click", function(){
    if ( rowin.value >= 10 && rowin.value <= 100 && colin.value >= 10 && colin.value <= 100){
        r = parseInt(rowin.value);
        c = parseInt(colin.value);
        grid.replaceChildren(); // clears everything

        createGrid();
        document.querySelector(".resize").classList.toggle("hide");
        document.querySelector(".container").classList.toggle("hide1");
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
            div.style.backgroundColor = "black";
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

