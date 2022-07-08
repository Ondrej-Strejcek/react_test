const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
	return res.status(200).json({
		success: true,
		title: "React test API"
	})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
