const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const queries = require('./queries')

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())



app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/:id', (req, res) => {
    queries.getById2(req.params.id).then(students => res.send(students))
})

app.post('/', (req, res) =>{
    queries.createStudent(req.body).then(students => res.send(students))
})

app.delete('/:id', (req,res) => {
    queries.deleteStudent(req.params.id).then(res.send("Status:204, Yooo you deleted that fool."))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))