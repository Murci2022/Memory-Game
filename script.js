
const titlesContainer = document.querySelector(".tiles");

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
    card.classList.add("title");
    card.setAttribute("data-color", color);
    card.setAttribute("data-revealed", false);
    card.addEventListener("click", ()=>{
        if(awaitingEndOfMove){
            return; 
        } else{
            card.style.backgroundColor = color; 
        }
    });
    return card;
}


/* ----------For Loop----------- */

for(let i = 0; i<tileCount; i++){
   
    const randomIndex = Math.floor(Math.random()*colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
   
  
    const title = buildCard(color);
    titlesContainer.appendChild(title) ; 
    colorsPicklist.splice(randomIndex,1); 
}