const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua","aquamarine","crimson","blue","dodgerblue","gold","greenyellow","teal",];
const colorsPicklist = [...colors,...colors];
const tileCount = colorsPicklist.length;




for(let i = 0; i<tileCount; i++){
    const randomIndex = Math.floor(Math.random()*colorsPicklist.length)
    const color = colorsPicklist[randomIndex]
    colorsPicklist.splice(randomIndex,1) 
    console.log(color)   
}