import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// Origin 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// JSON data limit
app.use(express.json({
    limit: "16kb",
}))

// Earlier you had to use body-parser because express didn't have much support regarding this Json thing

//url data, if there is space it may get converted to %20, etc. So we need to specify to express that data might come from Url as well
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// to store public assets, like images, pdf, favicon.
app.use(express.static("public"))

//cookies that only server can read and remove. CRUD as well
app.use(cookieParser())



export { app }