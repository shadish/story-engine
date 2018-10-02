const { randomFromArray } = require('../utils/randomHelpers')
const { guid } = require('../utils/guid')

const all = {
	tier1: [
		{
			name: 'farmer',
			exports: ['wheat', 'cotton', 'barley', 'rice', 'corn']
		},
		{ name: 'hunter', exports: ['boar', 'deer'] },
		{ name: 'soldier', exports: [] },
		{ name: 'woodsman', exports: ['wood'] },
		{ name: 'mason', exports: ['stone'] },
		{ name: 'potter', exports: ['pots'] },
		{ name: 'forager', exports: ['grass', 'berries'] }
	],
	tier2: [
		{ name: 'rancher', dependencies: ['grass'], exports: ['cow'] },
		{ name: 'tailor', dependencies: ['cotton'], exports: ['clothes'] },
		{ name: 'brewer', dependencies: ['barley'], exports: ['beer'] },
		{ name: 'vintner', dependencies: ['berries'], exports: ['wine'] }
	]
}

const getProfession = () => {
	return randomFromArray(all.tier1)
}

module.exports = { getProfession }