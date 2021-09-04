function range (start, end, step){
  let newArray = [];

  while(start === undefined || end === undefined || step === undefined){
    return newArray;
  }
  while(start > end){
    return newArray;
  }

  while(start === null || end === null || step === null){
    return newArray;
  }

  while(step <= 0){
    return newArray;
  }

  for (let i = start; i <= end; i = i + step){
    newArray.push(i);
  }
  return newArray;
}

//some_array.push(some_value)
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));