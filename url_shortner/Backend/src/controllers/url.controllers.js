import Url from "../models/url.model.js"
import { genCode } from "../utils/generateCode.js"

export const createUrl = async (req , res)=>{
    try {

        const {url} = req.body 

        if(!url){
            return res.status(400).json({
                success:false,
                message : `Please Provide Url`
            })
        }

        const newUrl = await Url.create({
            url,
            shortUrl : genCode(),
        })

        if(!newUrl){
            return res.status(400).json({
                success:false,
                message : `Error while creating Url`
            })
        }

        res.status(201).json({
            success:true,
            message : `Url created Successfullyy`,
            newUrl
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message : `Error in createUrl Controller!! ${error.message}`,
        })
    }
}


export const getAllUrl = async (req , res)=>{
    try {

        const urls = await Url.find({})

        if(!urls){
            return res.status(400).json({
            success:false,
            message : `No Url Found...`,
        })
        }

        res.status(200).json({
            success:true,
            message : `All urls fetched successfully`,
            urls
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message : `Error in getAllUrls Controller!! ${error.message}`,
        })
    }
}



export const redirectUrl = async (req , res)=>{
    try {

        const { code } = req.params

        if (!code) {
            return res.status(400).json({
                success: false,
                message: `Please Provide Code of your url`
            })
        }

        const url = await Url.findOne({ shortUrl: code })

        if (!url) {
            return res.status(404).json({
                success: false,
                message: `Url not found`
            })
        }

        await Url.findByIdAndUpdate(url._id, { $inc: { count: 1 } })

        res.redirect(url.url)

    } catch (error) {
        res.status(500).json({
            success:false,
            message : `Error in redirect Controller!! ${error.message}`,
        })
        
    }
}