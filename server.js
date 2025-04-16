const express = require("express");
const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// **RUTA PARA LA RAÍZ (/)**
app.get("/", (req, res) => {
  res.send("¡Bienvenido a la Calculadora API!");
});

// Ruta para la operación de suma (GET con parámetros en la URL)
app.get("/sumar/:num1/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Los parámetros deben ser números válidos." });
  }

  const resultado = num1 + num2;
  res.json({ resultado });
});

// Ruta para la operación de resta (GET con parámetros en la URL)
app.get("/restar/:num1/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Los parámetros deben ser números válidos." });
  }

  const resultado = num1 - num2;
  res.json({ resultado });
});

// Ruta para la operación de multiplicación (GET con parámetros en la URL)
app.get("/multiplicar/:num1/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Los parámetros deben ser números válidos." });
  }

  const resultado = num1 * num2;
  res.json({ resultado });
});

// Ruta para la operación de división (GET con parámetros en la URL)
app.get("/dividir/:num1/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Los parámetros deben ser números válidos." });
  }

  if (num2 === 0) {
    return res.status(400).json({ error: "No se puede dividir por cero." });
  }

  const resultado = num1 / num2;
  res.json({ resultado });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(
    `Servidor de la Calculadora API escuchando en http://localhost:${port}`
  );
});
