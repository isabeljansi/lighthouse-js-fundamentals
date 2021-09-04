function calculateRectangleArea(length, width){
  let areaOfRectangle = length * width;
  if(areaOfRectangle <= 0){
    return;
  }
  return areaOfRectangle;
}
function calculateTriangleArea(base, height){
  let areaOfTriangle = (base * height) / 2;
  if(areaOfTriangle <= 0){
    return;
  } 
  return areaOfTriangle;
}
function calculateCircleArea(radius){
  let areaOfCircle;
  if(radius <= 0){
    return;
  } 
  areaOfCircle = Math.PI * radius * radius;
  return areaOfCircle;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined