const express = require('express')
const app = express()

const getRandomArbitrary = (min, max) => {
	const result = Math.random() * (max - min) + min;
	return Math.round(result);
}


const getResponse = () => {
	return {
		INT: getRandomArbitrary(3,18),
		DEX: getRandomArbitrary(3,18),
		STR: getRandomArbitrary(3,18),
		WIS: getRandomArbitrary(3,18),
		CON: getRandomArbitrary(3,18),
		CHR: getRandomArbitrary(3,18)
	}
}

app.get('/', (req, res) => {
	const response = getResponse();
	res.send(response);
})

app.listen(3000, () => {
	console.log('express is running on port 3000')
})
