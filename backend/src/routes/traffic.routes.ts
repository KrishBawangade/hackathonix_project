import { Router } from "express";
import { getTraffic } from "../controllers/traffic.controller";

const router = Router();

router.get("/", getTraffic);

export default router;