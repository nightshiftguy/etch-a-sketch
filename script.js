let gridContainer = document.querySelector("#gridContainer");
let squares = [];

function createGrid(squaresPerSide){
    let squareAmount = squaresPerSide * squaresPerSide;
    sideLength = 500 / squaresPerSide;
    
    for(let i = 0; i<squareAmount; i++){
        squares.push(document.createElement("div"));
        squares[i].setAttribute("class", "gridSquare");
        squares[i].setAttribute("style","width: "+sideLength+"px; height: "+sideLength+"px;");
        squares[i].addEventListener("mouseleave", function (e) {e.currentTarget.style.backgroundColor = "black";});
        gridContainer.appendChild(squares[i]);
    }
}

createGrid(100);