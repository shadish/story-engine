const { getEvent } = require('./event')

const HISTORY_SPAN = 100

const getHistory = () => {
	const events = []
	for (let i = 0; i < HISTORY_SPAN; i++) {
		events.push(getEvent())
	}
	return {
		events
	}
}

module.exports = { getHistory }