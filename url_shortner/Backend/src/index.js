import app from "./app/app.js"


app.get("/", (req, res)=>{
    res.json({
        success : true, 
        message : `Health Check Route...`
    })
})