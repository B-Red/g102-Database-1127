const express = require('express')
const app = express()
const queries = require('./queries')

const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/:id', (req, res) => {
    queries.getById2(req.params.id).then(students => res.send(students))
})

app.post('/q', (req, res) =>{
    queries.createStudent(req.body).then(students => res.send(students))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))