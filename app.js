const { getFemaleName, getMaleName, wed } = require('./models/races')
const { getVillage } = require('./models/village')
const { getResources } = require('./models/resources')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
	const female = getFemaleName()
	const male = getMaleName()
	const couple = wed(male, female)

	res.send(couple);
})

app.get('/village', (req, res) => {
	const village = getVillage()
	res.send(village)
})

app.get('/resources', (req, res) => {
	const r = getResources().sort()
	res.send(r)
})

app.listen(3000, () => {
	console.log('running on :3000')
})
