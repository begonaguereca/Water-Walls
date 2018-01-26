const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getLargestTrappedWater } = require('./utils.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.post('/', (req, res) => {
	const walls = req.body.walls;
	const result = getLargestTrappedWater(walls);
	res.json(result);
});

app.get('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, console.log(`Server is listening on ${PORT}!`));