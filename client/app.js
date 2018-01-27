const getWaterFromWalls = () => {

  // const walls = document.getElementsByClassName('walls')[0].value;
  const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
  const data = { walls };
  const url = "http://localhost:3000/walls";

  createGrid(walls);

  console.log(`this is about to be sent: ${JSON.stringify(data)}`);

  const options = {
  	method: 'POST',
  	body: JSON.stringify(data),
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	})
  };

  fetch(url, options)
    .then(res => res.json())
    .then(response => console.log(`data has been parsed: ${response}`))
    .catch(error => console.log(`Error: ${error}`));

};

const createGrid = (walls) => {
	const columns = walls.length;
	const rows = findMaxElement(walls);
	const container = document.getElementsByClassName('container')[0];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			let newCell = document.createElement('div');
			newCell.classList.add('cell');
			newCell.style.width = (960/columns) + 'px';
			newCell.style.height = (960/rows) + 'px';
			container.appendChild(newCell);
		}
	}
};

const fillGrid = (walls) => {
	
}

const findMaxElement = arr => arr.reduce((max, current) => max > current ? max : current);

