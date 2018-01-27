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

app.post('/walls', (req, res) => {
	const walls = req.body.walls;
	// console.log(`this was received at post route: ${JSON.stringify(walls)}`);
	const result = getLargestTrappedWater(walls);
	// console.log(`this is being sent as the response: ${JSON.stringify(result)}`);
	res.json(result);
});

app.get('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, console.log(`Server is listening on ${PORT}!`));