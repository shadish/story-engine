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
		prefixConsonants: ['A', 'A', 'E', 'E', 'Yi', 'Ya'],
		prefixSyllables: ['n', 'm', 'l', 'r']
	}
}

const generateGarg = () => {
	const results = []
	for (let i = 0; i < 4; i++) {
		const sur = garg.surname.prefixConsonants[i]
			+ garg.surname.prefixSyllables[i]
			+ garg.surname.suffixes[i]

		const rando =
			garg.maleNames.prefixes[i]
			+ garg.maleNames.suffixes[i]
			+ ' '
			+ sur
			+ ' and '
			+ garg.femaleNames.prefixConsonants[i]
			+ garg.femaleNames.prefixSyllables[i]
			+ ' '
			+ sur

		results.push(rando)
	}
	return results
}

//module.exports = { generateGarg }