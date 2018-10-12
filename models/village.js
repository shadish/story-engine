const { getFemaleName, getMaleName, wed } = require('./races')
const { randomFromArray } = require('../utils/randomHelpers')
const { guid } = require('../utils/guid')
const { getRelations } = require('./relations')
const { getVillageResources } = require('./village_resources')

const getName = () => {
	const prefixes = ['Rock', 'Lake', 'Tree', 'Sky', 'Fish']
	const suffixes = ['town', 'ville', 'berg']
	return randomFromArray(prefixes) + randomFromArray(suffixes)
}

const getVillage = () => {
	const men = []
	const women = []
	const all = []

	for (let i = 0; i < 5; i++) {
		const m = getMaleName()
		const w = getFemaleName()
		men.push(m)
		women.push(w)
		//TODO: obviously not this, it is late and all this is temporary
		all.push(m)
		all.push(w)
	}

	men.sort((a, b) => b.stats.CHR - a.stats.CHR)
	women.sort((a, b) => b.stats.CHR - a.stats.CHR)

	all.forEach(m => getRelations(m, all))

	wed(men[0], women[0])

	return {
		id: guid(),
		name: getName(),
		resources: getVillageResources(),
		people: {
			men,
			women
		}
	}
}

module.exports = { getVillage }