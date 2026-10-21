import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

import { connectDb } from "../config/db.js"
import config from "../config/config.js"

const app = express()
const PORT = config.PORT || 8000

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"] || "*",
}))

app.use(cookieParser())
app.use(express.urlencoded({extended:true}))


connectDb()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is listening on http://localhost:${PORT}`)
    })
})



export default app;