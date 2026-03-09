import express from "express";
import cors from "cors";

import devicesRoutes from "./routes/devices.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Network Monitoring Backend Running",
  });
});

app.use("/devices", devicesRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});