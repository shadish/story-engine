const { randomFromRange } = require('../utils/randomHelpers')

const rollStats = () => {
	return {
		INT: randomFromRange(3, 18),
		DEX: randomFromRange(3, 18),
		STR: randomFromRange(3, 18),
		WIS: randomFromRange(3, 18),
		CON: randomFromRange(3, 18),
		CHR: randomFromRange(3, 18)
	}
}

module.exports = { rollStats }