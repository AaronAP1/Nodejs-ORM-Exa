const express = require('express'); 

const personsRouter = require('./usuarios.routers');
const ProductRouter = require('./producto.routers');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/usuarios', personsRouter);
  router.use('/productos', ProductRouter);
}

module.exports = routerApi;