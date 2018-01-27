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

// const trappedWater = [null, 2, null, 5, 1, 3, 2, null, 1];

// const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];

const findBiggestWaterTrap = (water) => {

  let waterRecord = {left: null, right: null, water: 0};
  let currentWater = 0;
  
  for (let firstWall = 0; firstWall < water.length; firstWall++) {
    if (!water[firstWall]) {
      let secondWall = firstWall + 1;
      while (water[secondWall]) {
        currentWater += water[secondWall++];
      }
      if (currentWater > waterRecord.water) {
        waterRecord.left = firstWall;
        waterRecord.right = secondWall;
        waterRecord.water = currentWater;
      }
      currentWater = 0;
      firstWall = secondWall - 1;
    }
  }
  return [waterRecord.left + 1, waterRecord.right + 1, waterRecord.water];
};

module.exports = {
  getLargestTrappedWater,
  findBiggestWaterTrap
};
















