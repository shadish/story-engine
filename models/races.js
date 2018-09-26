const randomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
}

const randomFromArray = (a) => {
	const i = Math.floor(Math.random() * (a.length));
	return a[i];
}

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

const generateGarg = () => {
	const results = []
	for (let i = 0; i < 20; i++) {
		const sur = randomFromArray(garg.surname.prefixConsonants)
			+ randomFromArray(garg.surname.prefixSyllables)
			+ randomFromArray(garg.surname.suffixes)

		const femaleOptionalPrefixSeed = randomInt(100)
		const optionalPrefix = femaleOptionalPrefixSeed % 7 === 0 ? randomFromArray(garg.femaleNames.optionalPrefix) : ''

		const rando =
			randomFromArray(garg.maleNames.prefixes)
			+ randomFromArray(garg.maleNames.suffixes)
			+ ' '
			+ sur
			+ ' and '
			+ randomFromArray(garg.femaleNames.prefixConsonants)
			+ randomFromArray(garg.femaleNames.prefixSyllables)
			+ optionalPrefix
			+ ' '
			+ sur

		results.push(rando)
	}
	return results
}

//module.exports = { generateGarg }