const sqContainer = document.querySelector(".sqContainer");
let totalSize = 600;


function gridSize() {
    rowCount = prompt("How big do you want grid to be?");
    rowCount = parseInt(rowCount);  
    while (rowCount > 100 || rowCount < 10 || isNaN(rowCount)) {
        rowCount = prompt("Invalid number of rows. Please enter a number between 10-100");
        rowCount = parseInt(rowCount);  
    }
    createGrid(rowCount);
}

function colorChange(event) {
    event.target.classList.add("cChange");
    event.target.style.background = "red";
}

function darkMode() {
    document.body.classList.toggle("dark-mode");
}

function createGrid(rowNum) {
    sqContainer.innerHTML = "";
    let boxSize = totalSize / rowNum;
    for (let i = 0; i < rowNum * rowNum; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        sqContainer.appendChild(box);
    }   
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((x) => {
        x.addEventListener("mouseover", colorChange);
    });
}

createGrid(16);