import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const RENDER_API_URL = "https://api.render.com/v1";

app.get("/services", async (req, res) => {
  try {
    const response = await fetch(`${RENDER_API_URL}/services`, {
      headers: { Authorization: `Bearer ${process.env.RENDER_API_KEY}` },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Render API error" });
  }
});

app.post("/services/:id/deploy", async (req, res) => {
  try {
    const response = await fetch(`${RENDER_API_URL}/services/${req.params.id}/deploys`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clearCache: false }),
    });

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: "Deploy error" });
  }
});

app.listen(3000, () => console.log("AgentBrat API running on port 3000"));￼Enter
import express from "express";
import { controller } from "./src/agent-controller/controller.js";

const app = express();
app.use(express.json());

app.post("/agent-controller", async (req, res) => {
  try {
    const result = await controller(req.body);
    res.send(result);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("Agent Controller is running");
});
