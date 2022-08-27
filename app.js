const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log('running on port|:|' + PORT)
})