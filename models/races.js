
const { randomFromArray, randomInt } = require('../utils/randomHelpers')

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
		gender: 'female',
		name,
		surname: getSurname()
	}
}

const getMaleName = () => {
	const name = randomFromArray(garg.maleNames.prefixes)
		+ randomFromArray(garg.maleNames.suffixes)
	return {
		gender: 'male',
		name,
		surname: getSurname()
	}
}

const wed = (male, female) => {
	return {
		husband: { ...male, surname: female.surname },
		wife: female
	}
}

module.exports = { getSurname, getFemaleName, getMaleName, wed }