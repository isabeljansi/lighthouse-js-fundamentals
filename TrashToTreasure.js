const smartGarbage = function (trash, bins) {
  let garbageCount = {
    waste : bins.waste, 
    recycling : bins.recycling,
    compost : bins.compost
  }
  if(trash === "waste"){
    garbageCount.waste += 1;
  } else if(trash === "recycling"){
    garbageCount.recycling += 1;
  } else {
    garbageCount.compost += 1;
  }
  return garbageCount;
}; 

smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });

console.log(smartGarbage);





