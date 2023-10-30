const express = require('express');
const router = express.Router();
const productocontroller = require('../controllers/producto.controller');

router
    .get('/lista', productocontroller.get)
    .get('/:id', productocontroller.getById)
    .post('/crear', productocontroller.create)
    .put('/:id', productocontroller.update)
    .delete('/:id', productocontroller._delete);

module.exports = router;