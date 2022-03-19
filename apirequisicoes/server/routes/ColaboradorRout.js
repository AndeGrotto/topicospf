const express = require('express');
const routes = express.Router();
const controle = require('../controller/ColaboradorCont');

// Aqui vão todos os endpoints
routes.route('/colaboradores').get(controle.listar);

module.exports = routes;