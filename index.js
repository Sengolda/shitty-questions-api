const express = require('express')
const app = express()
const port = 3000
const questions = require('./questions.json')

app.get('/', (req, res) => {
    res.status(403).send('This page is currently unavailable')
})

app.get('/questions', (req, res) => {
    res.json(questions)
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})
