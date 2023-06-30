const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua","aquamarine","crimson","blue","dodgerblue","gold","greenyellow","teal",];
const colorsPicklist = [...colors,...colors];
const tileCount = colorsPicklist.length;

function buildTile(color){
    const el = document.createElement("div");
    el.classList.add("tile");
    el.setAttribute("data-color",color);
    return el

}

// Game State
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

for(let i = 0; i<tileCount; i++){
    const randomIndex = Math.floor(Math.random()*colorsPicklist.length)
    const color = colorsPicklist[randomIndex]
    colorsPicklist.splice(randomIndex,1) 
    console.log(color)   
}