import express from "express";
import alertsRoutes from "./routes/alerts.js";
import markersRoutes from "./routes/markers.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", alertsRoutes);
app.use("/", markersRoutes);

app.listen(3000);
