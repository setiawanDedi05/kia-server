const express = require('express')
const app = express()
const port = process.env.port || 4002
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({"Massage": "Hello"})
})

app.listen(port, () => {
    console.log("I LOVE KIA "+ port);
})