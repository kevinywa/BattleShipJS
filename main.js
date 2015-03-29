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

var aircraftcarrier = {
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
  posX:0,
  posY:0,
  hits:0
};

ships[ships.length] = aircraftcarrier;
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

function addaircraftcarrier() {
  for (i=0; i<=aircraftcarrier.size; i++) {
    if (aircraftcarrier.isHorizontal === false) {
      grid[aircraftcarrier.posX+i][aircraftcarrier.posY] = aircraftcarrier.symbol;
    } else {grid[aircraftcarrier.posX][aircraftcarrier.posY+i] = aircraftcarrier.symbol};
  };
  writeGrid();
};
function addbattleship() {
  for (i=0; i<=battleship.size; i++) {
    if (battleship.isHorizontal === false) {
      grid[battleship.posX+i][battleship.posY] = battleship.symbol;
    } else {grid[battleship.posX][battleship.posY+i] = battleship.symbol};
  };
  writeGrid();
};function addcruiser() {
  for (i=0; i<=cruiser.size; i++) {
    if (cruiser.isHorizontal === false) {
      grid[cruiser.posX+i][cruiser.posY] = cruiser.symbol;
    } else {grid[cruiser.posX][cruiser.posY+i] = cruiser.symbol};
  };
  writeGrid();
};function addsubmarine() {
  for (i=0; i<=submarine.size; i++) {
    if (submarine.isHorizontal === false) {
      grid[submarine.posX+i][submarine.posY] = submarine.symbol;
    } else {grid[submarine.posX][submarine.posY+i] = submarine.symbol};
  };
  writeGrid();
};function adddestroyer() {
  for (i=0; i<=destroyer.size; i++) {
    if (destroyer.isHorizontal === false) {
      grid[destroyer.posX+i][destroyer.posY] = destroyer.symbol;
    } else {grid[destroyer.posX][destroyer.posY+i] = destroyer.symbol};
  };
  writeGrid();
};
function randomizeShips() {
  if (Math.floor((Math.random() * 10) + 1) <= 5) {
    aircraftcarrier.isHorizontal = true
  } else {aircraftcarrier.isHorizontal = false};
  if (aircraftcarrier.isHorizontal === true) {
    aircraftcarrier.posX = (Math.floor((Math.random() * 4)));
    aircraftcarrier.posY = (Math.floor((Math.random() * 9)));
  } else {
    aircraftcarrier.posX = (Math.floor((Math.random() * 9)));
    aircraftcarrier.posY = (Math.floor((Math.random() * 4)));
  };
  addaircraftcarrier();
  if (aircraftcarrier.isHorizontal === true and )//TODO
};
