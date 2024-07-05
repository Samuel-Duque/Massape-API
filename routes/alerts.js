import express from "express";
import {
  getAlerts,
  addAlerts,
  deleteAlerts,
  updateAlerts,
} from "../controllers/alerts.js";

const router = express.Router();

router.post("/alerts", addAlerts);

router.get("/alerts", getAlerts);

router.put("/alerts/:alertid", updateAlerts);

router.delete("/alerts/:alertid", deleteAlerts);

export default router;
