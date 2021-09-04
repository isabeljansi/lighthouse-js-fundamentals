function lastIndexOf(arrayList, indexValue){
  let trueValue = 0;
  for(let i = arrayList.length; i >= 0; i--){
    if(indexValue === arrayList[i]){
      trueValue = i;
      break;
    } else {
      trueValue = -1;
    }
  } 
  return trueValue;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);