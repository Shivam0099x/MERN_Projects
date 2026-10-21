import mongoose from "mongoose"
import config from "./config.js"

export const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(config.MONGO_URI)
        if(!conn) {
            console.log(`Db not connected...`)
            return
        }

        console.log(`Db connected Successfully... Host : ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Error while connecting to Database : ${error.message}`)
        process.exit(1)
    }
}