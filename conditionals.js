console.log("Program 1");

const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

console.log("Now you're ready to go outside!");




console.log("Program 2");

const temperature = 12;



if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
} else {
  console.log("Short sleeves are fine.");
}


console.log("Now you're ready to go outside!");

console.log("Program 3");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}



