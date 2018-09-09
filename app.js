const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('foo'))

app.listen(3000, () => {
	console.log('express is running on port 3000')
})
