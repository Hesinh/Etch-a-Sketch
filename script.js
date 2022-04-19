const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    let btnErase = document.querySelector("#btnErase")
    btnErase.addEventListener('click' , function(){
      cell.style.backgroundColor= 'white';
    })
    cell.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "orange";}); // THIS is the default, i need to get the default OUT
    
    let selRandom = document.querySelector('#clrRandom');
     selRandom.addEventListener('click', function() {
        cell.addEventListener('mouseover', function(e){
          e.target.style.backgroundColor = randColor();
        })
     })
    //selRandom.addEventListener('click', function()  {
      //cell.style.backgroundColor= randColor(); }):
;};
};
let rows = 16;
let cols = 16;
makeRows(rows, cols);


let changeRows = document.querySelector('#arrowChange');
  changeRows.addEventListener('click', function(){
     rows = prompt("enter the value of row");
     cols = prompt("enter the value of columns")
  });

// This is a proof about rgb

const randColor = () =>  {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
document.querySelector('#header').style.backgroundColor = randColor();