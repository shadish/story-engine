const randFromArray = (a) => {
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
		prefixConsonants: ['A', 'A', 'E', 'E', 'Yi', 'Ya'],
		prefixSyllables: ['n', 'm', 'l', 'r']
	}
}

const generateGarg = () => {
	const results = []
	for (let i = 0; i < 20; i++) {
		const sur = randFromArray(garg.surname.prefixConsonants)
			+ randFromArray(garg.surname.prefixSyllables)
			+ randFromArray(garg.surname.suffixes)

		const rando =
			randFromArray(garg.maleNames.prefixes)
			+ randFromArray(garg.maleNames.suffixes)
			+ ' '
			+ sur
			+ ' and '
			+ randFromArray(garg.femaleNames.prefixConsonants)
			+ randFromArray(garg.femaleNames.prefixSyllables)
			+ ' '
			+ sur

		results.push(rando)
	}
	return results
}

//module.exports = { generateGarg }