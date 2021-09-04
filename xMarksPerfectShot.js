const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let locationCorrdinates = [];
  let xCoordinate = 0;
  let yCoordinate = 0;

  for (let i = 0; i <= moves.length; i++){
    if (moves[i] === "north") {
      yCoordinate += 1;
    } else if (moves[i] === "south") {
      yCoordinate -= 1;
    } else if (moves[i] === "east") {
      xCoordinate += 1;
    } else if (moves[i] === "west") {
      xCoordinate -= 1;
    } 
  }
  return locationCorrdinates = [xCoordinate, yCoordinate];
}
console.log(finalPosition(moves));