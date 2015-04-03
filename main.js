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
}

var grid = [
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
  ['o','o','o','o','o','o','o','o','o','o'],
];

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

function addShip() {
  for (var x in ships) {
    for (var i=0; i<ships[x].size; i++) {
      if (ships[x].isHorizontal === false) {
        grid[ships[x].posY + i][ships[x].posX] = ships[x].symbol;
      } else {
        grid[ships[x].posY][ships[x].posX + i] = ships[x].symbol;
      }
    }
  }
}

function randomHoriz() {
  for (var x in ships) {
    if (Math.random()<0.5) {
      ships[x].isHorizontal = true;
    } else {
      ships[x].isHorizontal = false;
    }
  }
}

function randomPosi() {
  for (var x in ships) {
    if (ships[x].isHorizontal === true) {
      ships[x].posY = getRandomInt(0,9-ships[x].size);
      ships[x].posX = getRandomInt(0,9);
    } else {
      ships[x].posY = getRandomInt(0,9);
      ships[x].posX = getRandomInt(0,9-ships[x].size);
    }
  }
}

function fixPosi() {
}

shuffle(ships);
randomHoriz();
randomPosi();
addShip();
console.log(grid);


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
