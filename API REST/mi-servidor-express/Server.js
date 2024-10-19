const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Saludos Arbusta, mi nombre es Juan Carlos Amariles Lopez');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
