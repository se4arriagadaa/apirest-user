//const express = require('express')
// Conexion BD
const pool = require('../settings/db')
// Modelo BD
const Usuario = require('../models/model_usuario')

// listar usuarios app
let listarUsuarios = async (req, res) => {
  try {
    const model = await Usuario.find();
    const total = await Usuario.countDocuments({});
    
    res.json({ status: 200, total, model });
    console.log(model);
  } catch (err) {
    res.json({
      status: 400,
      mensaje: "Error al leer el archivo",
      err
    });
  }
};

// listar usuarios web
let listarContenido = async (req, res) => {
  try {
    const model = await Usuario.find();
    const total = await Usuario.countDocuments({});
    
    res.render('index', { Usuario });
    console.log(model);
  } catch (err) {
    res.json({
      status: 400,
      mensaje: "Error al leer el archivo",
      err
    });
  }
};

let addUsuario = async (req, res) => {
  const { nombre_usuario, password } = req.body;

  try {
    const usuario = new Usuario({
      nombre_usuario,
      password
    });
    
    const savedUsuario = await usuario.save();
    
    res.json({
      status: 200,
      mensaje: 'Usuario saved successfully',
      data: savedUsuario
    });
  } catch (err) {
    res.json({
      status: 400,
      mensaje: 'Error saving usuario',
      err
    });
  }
};


module.exports = {
  listarUsuarios,
  listarContenido,
  addUsuario,
};