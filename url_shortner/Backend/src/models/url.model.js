import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    url : {
        required : true,
        type : String,
    },
    shortUrl : {
        required : true,
        type : String,
        unique : true
    },
    count :{
        type : Number,
        default : 0
    }
}, {
    timestamps :true
})

const Url = mongoose.model("Url", urlSchema)
export default Url;