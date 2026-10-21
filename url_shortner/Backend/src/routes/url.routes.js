import { Router } from "express";

import {createUrl, getAllUrl, redirectUrl} from "../controllers/url.controllers.js"


const router = new Router()

router.post("/", createUrl)
router.get("/", getAllUrl)
router.get("/:code", redirectUrl)


export default router