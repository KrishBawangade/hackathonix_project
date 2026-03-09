import { Router } from "express";
import { getDevices } from "../controllers/devices.controller";

const router = Router();

router.get("/", getDevices);

export default router;