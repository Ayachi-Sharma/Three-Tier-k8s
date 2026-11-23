const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const Patient = mongoose.model("Patient", new mongoose.Schema({}, { strict: false }));

app.get("/api/patients", async (req, res) => res.json(await Patient.find()));
app.get("/api/patients/:id", async (req, res) => res.json(await Patient.findById(req.params.id)));
app.get("/health", (req, res) => res.send("ok"));

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/meditrack")
  .then(() => app.listen(5000, () => console.log("API on 5000")));

module.exports = Patient;