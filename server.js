import express from "express";

const app = express();

// Variable global donde guardamos el último roll
let lastRoll = null;

// Endpoint 1: tirar el dado y actualizar lastRoll
app.get("/roll", (req, res) => {
  const roll = Math.floor(Math.random() * 20) + 1;
  lastRoll = roll;
  res.json({ message: "Dado lanzado", result: roll });
});

// Endpoint 2: obtener el último roll sin lanzar
app.get("/getRoll", (req, res) => {
  if (lastRoll === null) {
    return res.json({ result: "Aún no se ha lanzado el dado" });
  }
  res.json({ result: lastRoll });
});

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});
