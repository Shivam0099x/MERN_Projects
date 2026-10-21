import app from "./app/app.js"
import urlRoutes from "./routes/url.routes.js"


app.get("/", (req, res)=>{
    res.json({
        success : true, 
        message : `Health Check Route...`
    })
})

app.use("/url", urlRoutes )