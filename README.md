# Water-Walls
Interactive solution for a variation of the classic "water walls" toy problem

## Installing / Getting started

Clone github to your local machine, navigate to the root folder of the directory, then:

```shell
npm install
nodemon server/index.js
```

...then go to http://localhost:3000 on your browser.

## Water Walls Problem Summary

We are going to represent a series of walls of different integer heights.

For example, given heights of [5, 3, 7, 2, 6, 4, 5, 9, 1, 2], it would look like this:

![alt text](https://i.imgur.com/xtN9vVV.png)

Now imagine that it rains.

![alt text](https://i.imgur.com/jJkBtUY.png)

Our goal is to determine which two walls have the most water trapped between them, and exactly how much water that is.

Output for the above: [3, 8, 11]...we're using 1 as the first index. This means that between wall #3 and wall #8, there are 11 blocks of water:

![alt text](https://i.imgur.com/ZQOCbpu.png)

## Solution Setup

### Strategy

Phase 1) Iterate through walls, keeping track of largest wall seen so far. For each wall, do three things: 

  A) If current wall is larger than largest wall, update largest wall
  B) Track all of the potentially trapped water that could exist on top of this current wall
  C) Check if the current wall successfully traps water on top of previously visited walls; if so, convert those "potential" spots of trapped water into actual spots of trapped water.

Phase 2) At this point, we have an array of all of the positions with trapped water; find the largest amount of water trapped between two walls and return the wall indices (indices should start at 1) and the largest water total.

### Inputs/Outputs

Input: const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
Output: let result = [3, 8, 11]
Constraints/Edge Cases: none

### Function Signatures

const getLargestTrappedWater = (walls) => {
  let potentialWater = {}
  let trappedWater = [];
  let largestWall = 0;

  // for each wall...
    // if current wall greater than largest wall
      // update largest wall
    // update potential water that could be trapped on top of current wall
    // updatePotentialWater()
    // convert ant potential trapped water due to current wall
    // convertPotentialToTrapped()

  // go over all of the trapped water
    // find largest total water between two walls
    // return the two wall indices and the total water trapped between them
};

const updatePotentialWater = (currentWallHeight, currentWallIndex, largestWallHeight, potentialWater) => {

};

const convertPotentialToTrapped = (currentWall, potentialWater, trappedWater) => {
  
};

const findBiggestWaterTrap = (trappedWater) => {

  let waterRecord = {left: 0, right: 0, water: 0};
  let currentWater = 0;

  // go over each position, looking for 0's (walls)
    // if 0, we've found first wall
      // create pointer to find next wall, set it to first wall + 1
      // increment by one, stopping when we find next wall or get to end of array
        //  while we see positions with water, add it to current water total
      // if curren water total is larger than max water seen
        // update waterRecord with first wall, second wall, and max total
  // return the two wall indices and the total water trapped between them
};
