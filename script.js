/* -----1------ */
//grab the conti "tiles" by class
const tilesContainer = document.querySelector(".tiles");
//assign 8 colors to the colors variable
const colors = ["aqua","aquamarine","crimson","blue","dodgerblue","gold","greenyellow","teal",];
//you will need 2x8 colors for the game, save this in a variable
const colorsPicklist = [...colors,...colors];
//you will need the length of colorsPicker as a variable
const tileCount = colorsPicklist.length;

/* ------3------- */
//create a funck to create a "div" for every color
function buildTile(color){
    const element = document.createElement("div"); //create a div and assign it to an element
    element.classList.add("tile"); //add a class "tile" to the element
    element.setAttribute("data-color",color);// add the atribute named "data-color" to the element and add the value to the attribute

    /*------5-----
     create an eventlistener on the created element*/
     element.addEventListener("click", ()=>{
        if(awaitingEndOfMove){
            return; // stop this statement
        }else{
            element.style.backgroundColor = color; //add color as a bg style
        }
     })




    return element  //and return this element 

}

// Game State
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

/* ----2-----
//build the logic to have the 16 colors in a random order
-create i with 16 numberss
-create a random number for every iteration
-assign the created value in every iteration to a variable
-cut out the choosen random color from the arr colorsPicklist
- */
for(let i = 0; i<tileCount; i++){
   
    const randomIndex = Math.floor(Math.random()*colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
   
    console.log(color) //now we have all the colors 
    console.log(colorsPicklist) //now we have all the choose color is not in the list anymore
    /* ----4----- */
    const tile = buildTile(color);//invoke the function 16 times = create the div 16x
    tilesContainer.appendChild(tile) ; //let it append in the DOM in the parent div
    colorsPicklist.splice(randomIndex,1); 
}