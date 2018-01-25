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



/* 

SETUP

Strategy: 

Iterate down array, keeping track of largest wall seen so far. If current wall is smaller than largest wall, then track all of the potential for trapped water that could exist given that we have a large wall to our left. Also, see if this current wall acts as the right-hand wall that will successfully trap water; if so, turn those "potential" spots of trapped water into actual spots of trapped water. Finally, track the largest amount of water trapped and its surrounding two walls. 

Input: const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
Output: let result = [3, 8, 11]
Constraints/Edge Cases: none

const getLargestTrappedWater = (walls) => {
	let potentialWater = {}
	let actualWater = [];
	let mostWaterTrapped = [];
	let largestWall = 0;

	// for each wall...
	  // if current wall is less than largest wall
	    // update potentialWater
	  // check if this wall traps any water
	    // if so, turn potentialWater into actualWater
	    // update mostWaterTrapped accordingly
};

const updatePotentialWater

*/