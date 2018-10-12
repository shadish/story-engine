const getRelations = (entity, otherEntities) => {
	const relationMap = {}
	otherEntities.forEach(other => {
		if (other.id !== entity.id) {
			relationMap[other.id] = {
				affinity: 0,
				familiarity: 0
			}
		}
	})
	entity.relations = relationMap
}

module.exports = { getRelations }