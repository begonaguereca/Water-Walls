const getLargestTrappedWater = (walls) => {
  let potentialWater = [];
  let trappedWater = [];
  let largestWall = 0;

  for (let i = 0; i < walls.length; i++) {
    let currentWall = walls[i];
    if (currentWall > largestWall) {
      largestWall = currentWall;
    }
    updatePotentialWater(currentWall, i, largestWall, potentialWater);
    convertPotentialToTrapped(currentWall, potentialWater, trappedWater);
  }
  // console.log(JSON.stringify(trappedWater));

  // return findBiggestWaterTrap(trappedWater);
  return trappedWater;
};

const updatePotentialWater = (currentWallHeight, currentWallIndex, largestWallHeight, potentialWater) => {
  for (let i = largestWallHeight; i > -1; i--) {
    potentialWater[i] = potentialWater[i] || [];
  }
  for (let i = largestWallHeight; i > currentWallHeight; i--) {
    potentialWater[i].push(currentWallIndex);
  }
    
};

const convertPotentialToTrapped = (currentWall, potentialWater, trappedWater) => {
  for (let i = 0; i <= currentWall; i++) {
    while(potentialWater[i].length > 0) {
      let index = potentialWater[i].pop();
      trappedWater[index] = trappedWater[index] || 0;
      trappedWater[index]++;
    }
  }
};

// const trappedWater = [null,2,null,5,1,3,2,null,1];

// const findBiggestWaterTrap = (trappedWater) => {
//   let leftWall = 0;
//   let rightWall = 0;
//   while(rightWall < trappedWater.length) {
//     if (trappedWater[rightWall]) {
      
//     }
//   }

// }; 

// const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];

// getLargestTrappedWater(walls);

const findBiggestWaterTrap = (water, walls) => {
  
  let rainRecord = {left: null, right: null, rain: 0};
  let currentRain = 0;
  let wallLeft = 1;
  
  for (let j = 1; j < water.length; j += 1) {
    if (water[j]) {
      currentRain += water[j];
    } else {
      if (currentRain > rainRecord.rain) {
        rainRecord.rain = currentRain;
        rainRecord.left = wallLeft;
        rainRecord.right = j + 1;
        wallLeft = j + 1;
        currentRain = 0;
      } else {
        wallLeft = j + 1;
        currentRain = 0;
      }
    }
  }
  return [rainRecord.left, rainRecord.right, rainRecord.rain]

};

module.exports = {
  getLargestTrappedWater,
  findBiggestWaterTrap
};
















