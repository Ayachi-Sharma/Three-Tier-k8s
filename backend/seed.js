require("dotenv").config();
const Patient = require("./server");
const data = require("./patients.json");

setTimeout(async () => {
  await Patient.deleteMany();
  await Patient.insertMany(data);
  console.log("seeded", data.length);
  process.exit();
}, 1500);