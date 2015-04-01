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

};
function addbattleship() {
  for (i=0; i<=battleship.size; i++) {
    if (battleship.isHorizontal === false) {
      grid[battleship.posX+i][battleship.posY] = battleship.symbol;
    } else {grid[battleship.posX][battleship.posY+i] = battleship.symbol};
  };

};
function addcruiser() {
  for (i=0; i<=cruiser.size; i++) {
    if (cruiser.isHorizontal === false) {
      grid[cruiser.posX+i][cruiser.posY] = cruiser.symbol;
    } else {grid[cruiser.posX][cruiser.posY+i] = cruiser.symbol};
  };

};
function addsubmarine() {
  for (i=0; i<=submarine.size; i++) {
    if (submarine.isHorizontal === false) {
      grid[submarine.posX+i][submarine.posY] = submarine.symbol;
    } else {grid[submarine.posX][submarine.posY+i] = submarine.symbol};
  };

};
function adddestroyer() {
  for (i=0; i<=destroyer.size; i++) {
    if (destroyer.isHorizontal === false) {
      grid[destroyer.posX+i][destroyer.posY] = destroyer.symbol;
    } else {grid[destroyer.posX][destroyer.posY+i] = destroyer.symbol};
  };

};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
function addShips() {
  addaircraftcarrier();
  addbattleship();
  addcruiser();
  addsubmarine();
  adddestroyer();
};

function randomPos() {
  if (Math.random()<.5) {
    ships[0].isHorizontal = true;
  } else {
    ships[0].isHorizontal = false;
  };
  if (Math.random()<.5) {
    ships[1].isHorizontal = true;
  } else {
    ships[1].isHorizontal = false;
  };
  if (Math.random()<.5) {
    ships[2].isHorizontal = true;
  } else {
    ships[2].isHorizontal = false;
  };
  if (Math.random()<.5) {
    ships[3].isHorizontal = true;
  } else {
    ships[3].isHorizontal = false;
  };
  if (Math.random()<.5) {
    ships[4].isHorizontal = true;
  } else {
    ships[4].isHorizontal = false;
  };

  if (ships[0].isHorizontal === true) {
    ships[0].posX = getRandomInt(0, (9-ships[0].size));
    ships[0].posY = getRandomInt(0,1);
    //ships[1] nested if/else statement
    if (ships[1].isHorizontal === true) {
      //both [0] and [1] horizontal
      ships[1].posX = getRandomInt(0,(9-ships[1].size));
      ships[1].posY = (ships[0].posY+getRandomInt(1,2));
    } else {
      //[0] horizontal [1] vertical
      ships[1].posX = (ships[0].posX+getRandomInt(1,2));
      ships[1].posY = (getRandomInt((ships[0].posY+1),(9-ships[1].size)));
    };
  } else {
    //ships[0].isHorizontal === false
    ships[0].posX = getRandomInt(0,1);
    ships[0].posY = getRandomInt(0, (9-ships[0].size));
    //ships[1] nested if/else statement
    if (ships[1].isHorizontal === true) {
      //if ships[0].isHorizontal === false AND ships[1].isHorizontal === true THEN...
      // checking if there's room for ships[1] on the x axis beside ships[0]
      if (ships[0].posX < (9-ships[1].size)) {
        ships[1].posX = (ships[0].posX+(getRandomInt(1,(9-ships[1].size))));
        ships[1].posY = getRandomInt(0,1);
      } else {
        // [1] is horizontal and [0] is vertical
        // [0].posX is greater than (grid[0].length - ships[1].size)
        ships[1].posX = getRandomInt(0,(ships[0].posX-ships[1].size));
        ships[1].posY = getRandomInt(2, 3)
      };
    } else {
      //if ships[0].isHorizontal === false AND ships[1].isHorizontal === false THEN
      ships[1].posX = (ships[0].posX+getRandomInt(1,2));
      ships[1].posY = (getRandomInt((ships[0].posY+1),(9-ships[1].size)));
    };
  };
};

shuffle(ships);
randomPos();
addShips();
console.log(grid);
