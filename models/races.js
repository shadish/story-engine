const { getProfession } = require('./professions')
const { randomFromArray, randomInt } = require('../utils/randomHelpers')
const { guid } = require('../utils/guid')
const { rollStats } = require('./stats')

const garg = {
	surname: {
		prefixConsonants: ['M', 'Mr', 'K', 'Kr', 'T', 'G', 'Gr', 'Ch', 'Chr', 'R'],
		prefixSyllables: ['or', 'ut', 'ol', 'ul', 'orb', 'uf', 'orf', 'ob', 'ur'],
		suffixes: ['oran', 'ort', 'ult', 'eld', 'ogan', 'ur']
	},
	maleNames: {
		prefixes: ['Ko', 'Cho', 'Vo', 'To', 'Tro', 'Go', 'Zo'],
		suffixes: ['on', 'l', 'r', 'ru', 'ru', 'ko', 'tu', 'fo', 'fu', 'gu', 'lu', 'f']
	},
	femaleNames: {
		prefixConsonants: ['Ao', 'Ae', 'Ei', 'Eo', 'Yi', 'Ya'],
		prefixSyllables: ['n', 'm', 'l', 'r'],
		optionalPrefix: ['ob', 'ol', 'ok']
	}
}

const getSurname = () => {
	return randomFromArray(garg.surname.prefixConsonants)
		+ randomFromArray(garg.surname.prefixSyllables)
		+ randomFromArray(garg.surname.suffixes)
}

const getFemaleName = () => {
	const femaleOptionalPrefixSeed = randomInt(100)
	const optionalPrefix = femaleOptionalPrefixSeed % 7 === 0 ? randomFromArray(garg.femaleNames.optionalPrefix) : ''
	const name = randomFromArray(garg.femaleNames.prefixConsonants)
		+ randomFromArray(garg.femaleNames.prefixSyllables)
		+ optionalPrefix

	return {
		id: guid(),
		gender: 'female',
		name,
		surname: getSurname(),
		stats: rollStats(),
		profession: getProfession()
	}
}

const getMaleName = () => {
	const name = randomFromArray(garg.maleNames.prefixes)
		+ randomFromArray(garg.maleNames.suffixes)
	return {
		id: guid(),
		gender: 'male',
		name,
		surname: getSurname(),
		stats: rollStats(),
		profession: getProfession()
	}
}

const wed = (male, female) => {
	male.spouse = female.id
	male.surname = female.surname
	female.spouse = male.id

	male.relations[female.id].affinity += 1
	male.relations[female.id].familiarity += 1
	female.relations[male.id].affinity += 1
	female.relations[male.id].familiarity += 1

}

module.exports = { getSurname, getFemaleName, getMaleName, wed }