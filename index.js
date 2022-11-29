

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// Crear servidor de express
const app = express();
const port = process.env.PORT;

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();

app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola chaval'
    })

});

app.listen(port, () => {
    console.log(`Servidor levantado en puerto ${port}!`)
})

