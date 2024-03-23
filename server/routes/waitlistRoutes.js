import express from "express";
import { getWaitlist, joinWaitlist } from "../controllers/waitlistController.js";

const router = express.Router({ mergeParams: true })

router.get('/', getWaitlist)

router.post('/', joinWaitlist)


export default router;