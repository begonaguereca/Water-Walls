const findWaterBlocks = (walls) => {
  let potentialWater = [];
  let trappedWater = new Array(walls.length).fill(0);
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
      trappedWater[index]++;
    }
  }
};

const findBiggestWaterBlock = (water) => {

  let waterRecord = {left: 0, right: 0, water: 0};
  let currentWater = 0;
  
  for (let firstWall = 0; firstWall < water.length; firstWall++) {
    if (!water[firstWall]) {
      let secondWall = firstWall + 1;
      while (water[secondWall] && secondWall < water.length) {
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

  return waterRecord.left !== waterRecord.right ? [waterRecord.left + 1, waterRecord.right + 1, waterRecord.water] : [0, 0, 0];
};

module.exports = {
  findWaterBlocks,
  findBiggestWaterBlock
};
















