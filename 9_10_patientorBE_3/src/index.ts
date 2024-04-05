import express from "express";
import cors from "cors";
import diagnosesRouter from "./routes/diagnoses";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3030;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong! pong!!");
});

app.use("/api/diagnoses", diagnosesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
