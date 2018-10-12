const { randomFromRange } = require('../utils/randomHelpers')

const MIN_RESOURCE = 1
const MAX_RESOURCE = MIN_RESOURCE + 5

const getVillageResources = () => {
	return {
		grass: randomFromRange(MIN_RESOURCE, MAX_RESOURCE),
		rock: randomFromRange(MIN_RESOURCE, MAX_RESOURCE),
		soil: randomFromRange(MIN_RESOURCE, MAX_RESOURCE),
		water: randomFromRange(MIN_RESOURCE, MAX_RESOURCE),
		flora: randomFromRange(MIN_RESOURCE, MAX_RESOURCE),
		fauna: randomFromRange(MIN_RESOURCE, MAX_RESOURCE),
	}
}

module.exports = { getVillageResources }