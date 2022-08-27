const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.connect('mongodb://localhost:27017/todoDB')

const requestSchema = mongoose.Schema({
    item: String
})
const Request = mongoose.model('Request', requestSchema)

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('running on port|:|' + PORT)
})