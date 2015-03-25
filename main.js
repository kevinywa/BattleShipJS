var grid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

console.log(grid);

var ships = [];

var aircraftCarrier = {
  symbol:"A",
  size:5,
  isHorizontal:false,
  posX:0,
  posY:0,
  hits:0
};
var battleship = {
  symbol:"B",
  size:4,
  isHorizontal:false,
  posX:0,
  posY:0,
  hits:0
};
var cruiser = {
  symbol:"C",
  size:3,
  isHorizontal:false,
  posX:0,
  posY:0,
  hits:0
};
var submarine = {
  symbol:"S",
  size:3,
  isHorizontal:false,
  posX:0,
  posY:0,
  hits:0
};
var destroyer = {
  symbol:"D",
  size:2,
  isHorizontal:false,
  posX:3,
  posY:5,
  hits:0
};

ships[ships.length] = aircraftCarrier;
ships[ships.length] = battleship;
ships[ships.length] = cruiser;
ships[ships.length] = submarine;
ships[ships.length] = destroyer;


function writeGrid() {
  document.getElementById('board').innerHTML = grid[0];
  document.getElementById('board').innerHTML += '<br>'+grid[1];
  document.getElementById('board').innerHTML += '<br>'+grid[2];
  document.getElementById('board').innerHTML += '<br>'+grid[3];
  document.getElementById('board').innerHTML += '<br>'+grid[4];
  document.getElementById('board').innerHTML += '<br>'+grid[5];
  document.getElementById('board').innerHTML += '<br>'+grid[6];
  document.getElementById('board').innerHTML += '<br>'+grid[7];
  document.getElementById('board').innerHTML += '<br>'+grid[8];
  document.getElementById('board').innerHTML += '<br>'+grid[9];
};

function addAircraftCarrier() {
  for (i=0; i<=aircraftCarrier.size; i++) {
    if (aircraftCarrier.isHorizontal === false) {
      grid[aircraftCarrier.posX+i][aircraftCarrier.posY] = aircraftCarrier.symbol;
    } else {grid[aircraftCarrier.posX][aircraftCarrier.posY+i] = aircraftCarrier.symbol};
  };
  writeGrid();
};

function randomizeAircraftCarrier() {
  if (Math.floor((Math.random() * 10) + 1) <= 5) {
    aircraftCarrier.isHorizontal = true
  } else {aircraftCarrier.isHorizontal = false};
  if (aircraftCarrier.isHorizontal === true) {
    aircraftCarrier.posX = (Math.floor((Math.random() * 5)));
    aircraftCarrier.posY = (Math.floor((Math.random() * 10)));
  } else {
    aircraftCarrier.posX = (Math.floor((Math.random() * 10)));
    aircraftCarrier.posY = (Math.floor((Math.random() * 5)));
  };
};
