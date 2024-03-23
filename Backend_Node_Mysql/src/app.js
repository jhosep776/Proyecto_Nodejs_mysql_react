const express = require('express');
const config = require('./config');
const app = express();
 
const rolesRouter=require('./routes/roles')
const brandsRouter=require('./routes/brands')

 
// Middleware para analizar cuerpos de solicitud en formato JSON
app.use(express.json());
// Middleware para analizar cuerpos de solicitud de formularios urlencoded
app.use(express.urlencoded({ extended: true }));
// configuracion puerto
app.set('port', config.app.port)
//rutas

 
app.use("/api/roles",rolesRouter);
app.use("/api/brands",brandsRouter);
module.exports = app;