const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Importa body-parser
const router = require('./routes/routes_user');

// Configura la conexión a la base de datos
mongoose.connect('mongodb://users_db/Users_db', { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log('Conexión a MongoDB establecida.');
    // Crea el servidor web después de la conexión exitosa a MongoDB
    const app = express();

    // Configura body-parser
    app.use(bodyParser.json()); // Analiza datos JSON
    app.use(bodyParser.urlencoded({ extended: true })); // Analiza datos codificados en URL

    // Define las rutas
    app.use('/routes_user', router);

    // Inicia el servidor web
    app.listen(3002, () => console.log('El servidor está en marcha'));
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
  });

