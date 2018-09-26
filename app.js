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


app.get('/village', (req, res) => {

	let men = []
	let women = []

	for (let i = 0; i < 5; i++) {
		men.push(getMaleName())
		women.push(getMaleName())
	}

	men = men.sort((a, b) => b.stats.CHR - a.stats.CHR)
	women = women.sort((a, b) => b.stats.CHR - a.stats.CHR)

	const lucky = wed(men[0], women[0])

	res.send({
		lucky,
		men,
		women
	});
})


app.listen(3000, () => {
	console.log('express is running on port 3000')
})
