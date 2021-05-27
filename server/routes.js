const express = require('express');

const authController = require('./src/controllers/authController');

const routes = express.Router();

routes.route('/auth/token')
  .post(authController.createAndGetTokenByUser);

module.exports = routes;
