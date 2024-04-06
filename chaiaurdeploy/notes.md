## npm init.

## start script 

## Express
Unopiniated, minimalistic web Framework.

npm install express.

example starter code.

```javascript
const express = require('express') // require module syntax. CJS common JS syntax
// import express from "express" // module syntax

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Server is listening on port ", + port)
})
```

## Hot reloading in react.

Unlike react , Here we need to restart server upon making any changes.

Restarting frequently might get annoying.

To solve this issue, we make use of nodemon.

## env

When deploy we need to take care of some sensitive data, information.
Server may or may not have the port available.

## dotenv
npm i dotenv
Create a new file .env, write your variable inside it.
```js
PORT=3000
```
USAGE: require('dotenv').config()

To use, process.env["PORT"]


## deploy
At this point application is ready enpugh to deploy.









