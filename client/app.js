const getWaterFromWalls = () => {

  // 5, 3, 7, 2, 6, 4, 5, 9, 1, 2
  // 5,4,5,6,1,8,5,4,7,1,1,1,1,1,1,1,15
  const walls = document.getElementsByClassName('walls')[0].value.split(',').map(elem => parseInt(elem));

  const data = { walls };
  const url = "http://localhost:3000/walls";
  const options = {
  	method: 'POST',
  	body: JSON.stringify(data),
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	})
  };

  fetch(url, options)
    .then(res => res.json())
    .then((response) => {
    	removeClass('cell');
    	createGrid(walls);
    	fillGrid(walls, response.water, response.maxWalls);
    	updateMaxWaterInfo(response.water, response.maxWalls);
    })
    .catch(error => console.log(`Error: ${error}`));

};

const findMaxElement = arr => arr.reduce((max, current) => max > current ? max : current);

const createGrid = (walls) => {
	const columns = walls.length + 1;
	const rows = findMaxElement(walls) + 1;
	const container = document.getElementsByClassName('container')[0];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			let newCell = document.createElement('div');
			newCell.classList.add('cell');
			if (j === 0) {
				newCell.innerText = rows - i;
				newCell.style['line-height'] = (600/rows) + 'px';
				newCell.style['font-size'] = ((600/rows) * 0.7) + 'px';
			} 
			newCell.style.height = (600/rows) + 'px';
			newCell.style.width = (600/columns) + 'px';
			
			container.appendChild(newCell);
		}
	}
};

const fillGrid = (walls, water, maxWalls) => {
	const columns = walls.length + 1;
	const rows = findMaxElement(walls) + 1;
	const container = document.getElementsByClassName('cell');

	for (let i = 0; i < rows; i++) {
		for (let j = 1; j < columns; j++) {
			if ((rows - i <= (walls[j - 1] + water[j - 1])) && (rows - i > walls[j - 1])) {
				container[(i * columns) + j].style['background'] = 'cyan';
			} else if (rows - i <= walls[j - 1]) {
			  let color = (maxWalls[0] === j || maxWalls[1] === j) ? 'black' : 'grey';
				container[(i * columns) + j].style['background'] = color;
			}
		}
	}
};

const removeClass = (name) => {
	const instance = document.getElementsByClassName(name);
	while(instance[0]) {
		instance[0].parentNode.removeChild(instance[0]);
	}
};

const updateMaxWaterInfo = (water, maxWalls) => {
	removeClass('results');
	const summary = document.getElementsByClassName('summary')[0];
	const results = document.createElement('p');

	const totalWater = water.reduce((sum, elem) => sum += elem);

	let summaryString = `Total water trapped: ${totalWater} blocks\nLargest section: ${maxWalls[2]} blocks, bettween walls #${maxWalls[0]} and #${maxWalls[1]}`;
	results.innerText = summaryString;
  results.classList.add('results');
	summary.appendChild(results);
};
