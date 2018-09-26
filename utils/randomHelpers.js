const randomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
}

const randomFromArray = (a) => {
	const i = Math.floor(Math.random() * (a.length));
	return a[i];
}

const randomFromRange = (min, max) => {
	const result = Math.random() * (max - min) + min;
	return Math.round(result);
}

module.exports = { randomInt, randomFromArray, randomFromRange }