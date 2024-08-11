let gridContainer = document.querySelector("#gridContainer");
const GRID_WIDTH = 920;
gridContainer.setAttribute("style","width: "+GRID_WIDTH+"px; height: "+GRID_WIDTH+"px;");
let resetBtn = document.querySelector("button");
let squares = [];

function createGrid(squaresPerSide){
    let squareAmount = squaresPerSide * squaresPerSide;
    sideLength = GRID_WIDTH / squaresPerSide;
    
    for(let i = 0; i<squareAmount; i++){
        squares.push(document.createElement("div"));
        squares[i].setAttribute("class", "gridSquare");
        squares[i].setAttribute("style","width: "+sideLength+"px; height: "+sideLength+"px;");
        squares[i].addEventListener("mouseleave", function (e) {e.currentTarget.style.backgroundColor = "black";});
        gridContainer.appendChild(squares[i]);
    }
}

resetBtn.addEventListener("click",()=>squares.forEach(element => {element.style.backgroundColor = "";}));

let squaresPerSide = prompt("Enter amount of squares in grid side: ");
if(squaresPerSide>100)  squaresPerSide=100;
createGrid(squaresPerSide);