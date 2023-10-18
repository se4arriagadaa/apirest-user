const express = require('express');
const app = express.Router();
const usuario = require('../controller/route_usuario')

// listar usuarios app
app.get('/listarUsuarios', usuario.listarUsuarios);

// listar usuarios web
app.get('/listarContenido', usuario.listarContenido);

// agregar usuario post
app.post('/addUsuario', usuario.addUsuario);

module.exports = app;