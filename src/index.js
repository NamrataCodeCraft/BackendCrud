const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')

mongoose.connect('mongodb+srv://namrata:namrata@cluster0.nw7vony.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log('db')).catch((err)=> console.log(err))

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use('/' , route)
app.use('/test', function(req,res) {
    return res.status(200).send({status: true, msg: 'hello wordl'})
})
app.listen(port, function() {
    console.log(`express app is running on ${port}`)
})