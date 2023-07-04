
const tilesContainer = document.querySelector(".tiles");

const colors = ["aqua","aquamarine","crimson","blue","dodgerblue","gold","greenyellow","teal",];

const colorsPicklist = [...colors,...colors];

const tileCount = colorsPicklist.length;


/* ----States--------------- */

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

/* ---------Function-------- */

function buildCard(color){
    const card = document.createElement("div");
    card.classList.add("tile");
    card.setAttribute("data-color", color);
    card.setAttribute("data-revealed", false);
    card.addEventListener("click", ()=>{
        if(awaitingEndOfMove === true){
            return; 
        } else{
            card.style.backgroundColor = color; 
            if(!activeTile){
                activeTile=card
            }
            console.log(activeTile)
        }
    });
    return card;
}


/* ----------For Loop----------- */

for(let i = 0; i<tileCount; i++){
   
    const randomIndex = Math.floor(Math.random()*colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    colorsPicklist.splice(randomIndex,1);
   
  
    const tile = buildCard(color);
    tilesContainer.appendChild(tile) ; 
     
   
}