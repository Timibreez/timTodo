const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/todoDB', {useNewUrlParser: true})

const requestSchema = mongoose.Schema({
    item: String
})

const Todo = mongoose.model('Request', requestSchema)

// Routes
app.get('/', (req, res) => {
    Todo.find((err, found) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render('index', {todos: found})
        }
    })
})

app.post('/', (req, res) => {
    const input = req.body.input

    const todo = new Todo({
        item: input
    })

    todo.save((err) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/')
        }
    })
})

app.post('/delete', (req, res) => {
    const todo = req.body.checkbox

    Todo.findByIdAndDelete(todo, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/')
        }
    })
})

app.listen(PORT, () => {
    console.log('listening to the server on http://localhost:3000')
})