import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const DB_PATH = process.env.MONGODB_URI+ "/" + DB_NAME
        // console.log(typeof DB_PATH)
        const connectionInstance = await mongoose.connect(DB_PATH)
        console.log(`\n MongoDB connected!!! DB HOST: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance)

    } catch (error) {
        console.log("Mongo DB connection error: ", error)
        process.exit(1) //read up exit codes
    }
}

export default connectDB

