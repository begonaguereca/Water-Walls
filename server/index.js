const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getLargestTrappedWater, findBiggestWaterTrap } = require('./utils.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.post('/walls', (req, res) => {
	const walls = req.body.walls;
	let water = getLargestTrappedWater(walls);
	let maxWalls = findBiggestWaterTrap(water);
	const result = {
		water,
		maxWalls
	}
	res.json(result);
});

app.get('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, console.log(`Server is listening on ${PORT}!`));