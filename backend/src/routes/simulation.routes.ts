import { Router } from "express";
import {
  startDdosSimulation,
  startPortScanSimulation,
  startBruteForceSimulation,
  stopAttackSimulation,
  getSimulation
} from "../controllers/simulation.controller";

const router = Router();

router.post("/start-ddos", startDdosSimulation);
router.post("/start-port-scan", startPortScanSimulation);
router.post("/start-brute-force", startBruteForceSimulation);

router.post("/stop", stopAttackSimulation);

router.get("/status", getSimulation);

export default router;