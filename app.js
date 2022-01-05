const express = require('express')
const app = express()
const port = process.env.PORT || 4002
const cors = require('cors')
const router = require('./routers')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

if(process.env.NODE_ENV === 'test') module.exports = app
else app.listen(port, () => {
    console.log("I LOVE KIA "+ port);
})