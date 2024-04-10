import express from "express";
import { getPropertyManagers, addPropertyManager } from "../controllers/propertyManagerController.js";

const router = express.Router({ mergeParams: true })

router.get('/', getPropertyManagers)

router.post('/', addPropertyManager)


export default router;