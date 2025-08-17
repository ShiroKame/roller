import express from "express";

const app = express();
let lastRoll = null;

// Endpoint 1: tirar el dado y actualizar lastRoll
app.get("/roll", (req, res) => {
  const roll = Math.floor(Math.random() * 20) + 1;
  lastRoll = roll;
  res.json({ message: "Dado lanzado", result: roll });
});

// Endpoint 2: obtener el último roll como array (compatible con FrameVR)
app.get("/getRoll", (req, res) => {
  if (lastRoll === null) {
    return res.json(["Aún no se ha lanzado el dado"]);
  }
  res.json([lastRoll]);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API corriendo en http://0.0.0.0:${PORT}`);

});




