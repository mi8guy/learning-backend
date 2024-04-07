import express from 'express';

const app = express()

//middleware
//server static file -- bad practice
app.use(express.static('dist'))

// app.get('/', (req, res ) => {
//     res.send("Server is ready!");
// })



// get a list of 5 jokes.

const jokes = [
    {
        id: 1,
        title: "joke 1",
        content: 'This is a joke 1',
    },
    {
        id: 2,
        title: "joke 2",
        content: 'This is a joke 2',
    },
    {
        id: 3,
        title: "joke 3",
        content: 'This is a joke 3',
    },
    {
        id: 4,
        title: "joke 4",
        content: 'This is a joke 4',
    },
    {
        id: 5,
        title: "joke 5",
        content: 'This is a joke 5',
    },
]

app.get('/api/jokes', (req, res) => {
    
    res.send(jokes)
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})