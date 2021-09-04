function howManyHundreds(numOfBottles){
  let totalBottlesPerContainer = 100;
  let numOfContainers;

  if(numOfBottles >= totalBottlesPerContainer ){
    numOfContainers = (numOfBottles - (numOfBottles % totalBottlesPerContainer)) / totalBottlesPerContainer;
  } else {
    numOfContainers = 0;
  } 
  return numOfContainers;
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);