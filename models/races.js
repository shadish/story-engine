const garg = {
	habitat: 'subterra',
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
	for (let i = 0; i < 10; i++) {
		results.push('torb')
	}
	return results
}

document.write(generateGarg())

module.exports = { generateGarg }