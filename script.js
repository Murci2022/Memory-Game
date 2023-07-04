
const tilesContainer = document.querySelector(".tiles");

const colors = ["aqua","aquamarine","crimson","blue","dodgerblue","gold","greenyellow","teal",];

const colorsPicklist = [...colors,...colors];

const tileCount = colorsPicklist.length;


/* ----States--------------- */

let revealedCount = 0;
let activeTile = null; //falsy
let awaitingEndOfMove = false;

/* ---------Function-------- */

function buildCard(color){
    const card = document.createElement("div");
    card.classList.add("tile");
    card.setAttribute("data-color", color);
    card.setAttribute("data-revealed", false);
    card.addEventListener("click", ()=>{
        console.log("click")
        const revealed = card.getAttribute("data-revealed");

        if(awaitingEndOfMove || revealed === "true" || card === activeTile){
            return; 
        } 
            card.style.backgroundColor = color; 
            if(!activeTile){
                activeTile=card // it becomes truthy
                return;
            }
            /* matching logic */
            const colorMatch = activeTile.getAttribute("data-color");
            if(colorMatch === color){
                activeTile.setAttribute("data-revealed","true")
                card.setAttribute("data-revealed","true")
                awaitingEndOfMove = false;
                activeTile = null;
                revealedCount += 2;
                
                if(revealedCount === tileCount){
                    alert("You Won! Refreash to play again.")
                }
                return;
            }

            console.log(revealedCount)


            awaitingEndOfMove = true;
            setTimeout(()=>{
                card.style.backgroundColor = null;
                activeTile.style.backgroundColor = null;
                 awaitingEndOfMove = false;
                 activeTile = null;
            },1000)

           
            
        
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