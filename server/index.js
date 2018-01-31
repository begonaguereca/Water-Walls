const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { findWaterBlocks, findBiggestWaterBlock } = require('./utils.js');

const app = express();
const PORT = 3000;

const serverID = Math.floor(Math.random() * 10000);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../views')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	let color = 'SteelBlue';
  res.render('index', { color, serverID });
});

app.post('/walls', (req, res) => {
	const walls = req.body.walls;
	let water = findWaterBlocks(walls);
	let maxWalls = findBiggestWaterBlock(water);
	const result = {
		water,
		maxWalls
	}
	res.json(result);
});

app.get('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, console.log(`Server #${serverID} is listening on ${PORT}!`));