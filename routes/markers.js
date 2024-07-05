import express from "express";
import {
  getMarkers,
  addMarkers,
  deleteMarkers,
  updateMarkers,
} from "../controllers/markers.js";

const router = express.Router();

router.post("/markers", addMarkers);

router.get("/markers", getMarkers);

router.put("/markers/:markerid", updateMarkers);

router.delete("/markers/:markerid", deleteMarkers);

export default router;
