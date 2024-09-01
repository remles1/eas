function populateGrid(num){
    let cellWidth = 700/num - 1; //that '- 1' is for the gap to align with flexbox
    let grid = document.querySelector(".grid");

    for(let i = 0; i < num*num;i++){
        let cell = document.createElement("div");
        cell.setAttribute("id",i);
        cell.classList.add("cell");
        cell.style.width = cellWidth + "px";
        cell.style.height = cellWidth + "px";
        //cell.style.border = "1px solid black"
        grid.appendChild(cell);
        cell.addEventListener("mouseover",() => {
            changeColorOfCell(cell);
        });
    }
}

function changeColorOfCell(cell){
    cell.style.background = "rgb(" + (Math.random()* 256) % 256 + ',' + (Math.random()* 256) % 256  +  ',' + (Math.random()* 256) % 256  + ")" ;
}


populateGrid(16);
