const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes_user');

// Configura la conexión a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/Users_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB establecida.');
    // Crea el servidor web después de la conexión exitosa a MongoDB
    const app = express();

    // Define las rutas
    app.use('/routes_user', router);

    // Inicia el servidor web
    app.listen(3002, () => console.log('El servidor está en marcha'));
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
  });
