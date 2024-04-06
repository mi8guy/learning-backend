const express = require('express') // require module syntax. CJS common JS syntax
// import express from "express" // module syntax

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('<h1> Please login at twitter </h1>')
})

app.get('/youtube', (req,res) => {
    res.send("Chai aur code")
})

app.listen(port, () => {
    console.log("Server is listening on port ", + port)
})