// This create the divs, and contains the function that make rows
const container = document.getElementById("container");
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    // This contains the buttons
    let btnBlack = document.querySelector("#btnBlack");
    btnBlack.addEventListener('click', function(){
      cell.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'black';
      })
    })
    let btnErase = document.querySelector("#btnErase");
    btnErase.addEventListener('click' , function(){
      cell.style.backgroundColor = 'white';
    })
    let selRandom = document.querySelector('#clrRandom');
      selRandom.addEventListener('click', function(){
        cell.addEventListener('mouseover', function(e){
          e.target.style.backgroundColor = randColor();
        })
      })
    let btnOrange = document.querySelector('#btnOrange');
    btnOrange.addEventListener('click', function(){
      cell.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'orange';
      })
    })
    //default color
    cell.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "orange";}); // THIS is the default, i need to get the default OUT
    
  };
;};
//This call the default grid
makeRows(16,16);
//This controls the button change , it allows you to create a new grid
let changeGridSize = document.querySelector('#gridChange');
changeGridSize.addEventListener('click' , function(){
  let rowValue = prompt("Rows?");
    if (rowValue > 0 ){
    }else if(rowValue > 100) {
      alert('100 is the max, try again')
      return;
    }else if(rowValue <0){
      alert('negatives numbers are NOT allowed')
      return;
    }else {
      alert('Try to put a number greater than 0')
      return;
    }
let colValue = prompt("cols?");
  if (colValue > 0 ){
  }else if(colValue > 100) {
    alert('100 is the max, try again')
    return;
  }else if(colValue <0){
    alert('negatives numbers are NOT allowed')
    return;
  }else {
    alert('Try to put a number greater than 0')
    return;
  }
  document.getElementById('container').textContent = '';
  makeRows(rowValue,colValue)
  }
    );
// This controls the randoms colors
const randColor = () =>  {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}                           