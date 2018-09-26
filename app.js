const { getSurname, getFemaleName, getMaleName, wed } = require('./models/races')
const { rollStats } = require('./models/stats')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
	const female = getFemaleName()
	const male = getMaleName()
	const couple = wed(male, female)

	res.send(couple);
})

app.listen(3000, () => {
	console.log('express is running on port 3000')
})
