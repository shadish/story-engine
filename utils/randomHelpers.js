const randomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
}

const randomFromArray = (a) => {
	const i = Math.floor(Math.random() * (a.length));
	return a[i];
}

module.exports = { randomInt, randomFromArray }