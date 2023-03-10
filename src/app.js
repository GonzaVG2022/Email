const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
// Esta es nuestra aplicación
const app = express();
const errorHandler = require('./utils/errorHandler')

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());
// routes
app.get('/', (req, res) =>{
    return res.send('Welcome to node Flavio')
});

app.use('/api/v1', router);

// middlewares desdpues de las rutas
app.use(errorHandler)

module.exports = app;