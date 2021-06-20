let main = document.querySelector("body")
let container = document.querySelector(".container")
let button = document.querySelector(".buttons")

let rainbowColor = document.createElement("button")
let buttonGray = document.createElement("button")


function makeGrid (columns, rows) {
  for (let i = 0; i < (columns * rows); i++){
    const div = document.createElement("div") // for the sub divs
    div.style.outline = "1px solid pink"
    div.style.width = "31.25px"
    div.style.height = "31.25px"
    container.style.gridTemplateColumns = `repeat ( ${columns}, 1fr)`; // should in css but it is dynamic so must with JS. 1fr is one fraction of our size
    container.style.gridTemplateRows = `repeat ( ${rows}, 1fr)`; // same
    // repeat() takes how many times we want it repeat + the size

    div.classList.add("cell")
    container.appendChild(div)
  }
}
makeGrid(16, 16)



// AN EFFORT TO MAKE THE SIZE STABLE...-FAILED
// window.addEventListener("resize", () =>{
//   const width = document.querySelector(".cell").offsetWidth;
//   document.querySelector(".container").style.setProperty("grid-auto-rows", `${width}px`);
// })
// window.addEventListener("load", () =>{
//   const width = document.querySelector(".cell").offsetWidth;
//   const widthS = width - 2;
//   document.querySelector(".container").style.setProperty("grid-auto-rows", `${widthS}px`);
// })
// window.addEventListener("resize", () =>{
//   const height = document.querySelector(".cell").offsetHeight;
//   document.querySelector(".container").style.setProperty("grid-auto-columns", `${height}px`);
// })
// window.addEventListener("load", () =>{
//   const height = document.querySelector(".cell").offsetHeight;
//   const heightS = height - 2;
//   document.querySelector(".container").style.setProperty("grid-auto-columns", `${heightS}px`);
// })





function makeGrayColor(){
  const cells = container.querySelectorAll(".cell")
  buttonGray.textContent = "gray"

  buttonGray.addEventListener("click", () => {
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
      let randomNumber = Math.floor(Math.random() * 255) 
      cell.style.background = `rgb(${randomNumber}, ${randomNumber}, ${randomNumber})`
    }))   
  })
  buttonGray.classList.add("grayButton")
  main.appendChild(buttonGray)
}
makeGrayColor()


function makeRainbowColor(){
  const cells = container.querySelectorAll(".cell")
  rainbowColor.textContent = "rainbow"

  rainbowColor.addEventListener("click", () => {
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
      let red = Math.floor(Math.random() * 255) //each color is from 0 till 255 
      let pink = Math.floor(Math.random() * 255)
      let yellow = Math.floor(Math.random() * 255)
      cell.style.background = `rgb(${red}, ${pink}, ${yellow}) `
      
    }))   
  })
  rainbowColor.classList.add("colorButton")
  main.appendChild(rainbowColor)
}
makeRainbowColor()


function toReset(){
  const cells = container.querySelectorAll(".cell")
  cells.forEach(cell => cell.remove())
}
function toResize(){
  button.addEventListener("click", () => {
    let player = prompt("pick grid's size (e.g. 20sqr")
    if(player === null || player < 1){
      toReset();
      makeGrid(16, 16)
      makeRainbowColor()
    } else {
      toReset();
      makeGrid(player, player)
      makeRainbowColor()
    }
  })
}
toResize()