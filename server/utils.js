/* 

Summary: 

We are going to represent a series of walls of different integer heights.

Given heights of [5, 3, 7, 2, 6, 4, 5, 9, 1, 2], it would look like this:

https://i.imgur.com/xtN9vVV.png

Now imagine that it rains.

https://i.imgur.com/jJkBtUY.png

Your goal is to determine which two walls have the most water trapped between them, and exactly how much water that is.

Output for the above: [3, 8, 11]. I.e., between wall #3 and wall #8, there are 11 blocks of water.

*/

const getLargestTrappedWater = (walls) => {
	let potentialWater = {}
	let trappedWater = [];
	let largestWall = 0;

  for (let i = 0; i < walls.length; i++) {
  	if (walls[i] > largestWall) {
  		largestWall = walls[i];
  	} else {
			updatePotentialWater(walls[i], largestWall, potentialWater);
  	}
    convertPotentialToTrapped(walls[i], potentialWater, trappedWater);
  }

  return findBiggestWaterTrap(trappedWater);
};

const updatePotentialWaterTracker = (currentWall, largestWall, potentialWater) => {
	// add currentWall index to each 
};

const convertPotentialToTrapped = (currentWall, potentialWater, trappedWater) => {
	
};

/* 

SETUP

Strategy: 

Phase 1) Iterate through walls, keeping track of largest wall seen so far. For each wall, if current wall is smaller than largest wall, then track all of the potentially trapped water (in a hash) that could exist on top of this current wall, which would turn into actual water if we eventually come across a larger wall in the future. Also, see if this current wall acts as the right-hand wall that will successfully trap water on top of previously seen smaller walls; if so, turn those "potential" spots of trapped water into actual spots of trapped water (tracked in an array). 

Phase 2) Once we've iterated over every wall, we have an array of all of the spots with trapped water; find the largest amount of water trapped between two walls and return the wall indices and the water total.

Input: const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
Output: let result = [3, 8, 11]
Constraints/Edge Cases: none

const getLargestTrappedWater = (walls) => {
	let potentialWater = {}
	let trappedWater = [];
	let largestWall = 0;

	// for each wall...
	  // if current wall is less than largest wall
	    // update potentialWaterTracker
	  // check if this wall traps any water
	    // trapWater

  
  // go over all of the trapped water
    // find largest total water between two walls
    // return the two wall indices and the total water trapped between them
};

const updatePotentialWaterTracker = (currentWall, largestWall, potentialWater) => {
	// add currentWall index to each 
};

const trapWater = (currentWall, potentialWater, trappedWater) => {
	
};

const findBiggestWaterTrap = (trappedWater) => {
	// go over each position
    // find largest total water between two walls (walls 0's, no water is on top of them)
  // return the two wall indices and the total water trapped between them
};

*/
















