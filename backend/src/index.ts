import express from "express";
import cors from "cors";

import devicesRoutes from "./routes/devices.routes";
import trafficRoutes from "./routes/traffic.routes";
import alertsRoutes from "./routes/alerts.routes";
import simulationRoutes from "./routes/simulation.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Network Monitoring Backend Running",
  });
});

app.use("/devices", devicesRoutes);

app.use("/traffic", trafficRoutes);

app.use("/alerts", alertsRoutes);

app.use("/simulation", simulationRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});