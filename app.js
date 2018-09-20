const { generateGarg } = require('./models/races')
const express = require('express')
const app = express()

const getRandomArbitrary = (min, max) => {
	const result = Math.random() * (max - min) + min;
	return Math.round(result);
}

const getResponse = () => {
	const chars = {
		foo: getCharacter(),
		bar: getCharacter()
	}

	const wits = getRandomArbitrary(0, 9) % 2 == 0

	let winner
	if (wits) {
		winner = chars.foo.INT > chars.bar.INT ? 'foo' : 'bar'
	} else {
		winner = chars.foo.STR > chars.bar.STR ? 'foo' : 'bar'
	}

	return {
		characters: chars,
		wits,
		winner
	}
}

const getCharacter = () => {
	return {
		INT: getRandomArbitrary(3, 18),
		DEX: getRandomArbitrary(3, 18),
		STR: getRandomArbitrary(3, 18),
		WIS: getRandomArbitrary(3, 18),
		CON: getRandomArbitrary(3, 18),
		CHR: getRandomArbitrary(3, 18)
	}
}

app.get('/', (req, res) => {
	const response = getResponse();
	res.send(response);
})

app.get('/garg', (req, res) => {
	res.send(generateGarg());
})

app.listen(3000, () => {
	console.log('express is running on port 3000')
})
