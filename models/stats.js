const { randomFromRange } = require('../utils/randomHelpers')

const MIN_STAT = 3
const MAX_STAT = 18

const rollStats = () => {
	return {
		INT: randomFromRange(MIN_STAT, MAX_STAT),
		DEX: randomFromRange(MIN_STAT, MAX_STAT),
		STR: randomFromRange(MIN_STAT, MAX_STAT),
		WIS: randomFromRange(MIN_STAT, MAX_STAT),
		CON: randomFromRange(MIN_STAT, MAX_STAT),
		CHR: randomFromRange(MIN_STAT, MAX_STAT)
	}
}

module.exports = { rollStats }