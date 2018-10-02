const { getFemaleName, getMaleName, wed } = require('./races')
const { randomFromArray } = require('../utils/randomHelpers')
const { guid } = require('../utils/guid')

const getName = () => {
	const prefixes = ['Rock', 'Lake', 'Tree', 'Sky', 'Fish']
	const suffixes = ['town', 'ville', 'berg']
	return randomFromArray(prefixes) + randomFromArray(suffixes)
}

const getVillage = () => {
	const men = []
	const women = []

	for (let i = 0; i < 5; i++) {
		men.push(getMaleName())
		women.push(getFemaleName())
	}

	men.sort((a, b) => b.stats.CHR - a.stats.CHR)
	women.sort((a, b) => b.stats.CHR - a.stats.CHR)

	wed(men[0], women[0])

	return {
		id: guid(),
		name: getName(),
		people: {
			men,
			women
		}
	}
}

module.exports = { getVillage }