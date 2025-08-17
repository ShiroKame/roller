import express from "express";
import cors from "cors";

const app = express();

// Habilitar CORS para todos los orígenes
app.use(cors());

// Variable global donde guardamos el último roll
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
  res.json([ lastRoll.toString() ]);
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});
