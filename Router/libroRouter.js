const express = require('express');
const router = express.Router();
const libroController = require('../Controller/libroController');

// Definir las rutas y asociarlas con los métodos del controlador
router.get('/libros', libroController.obtenerLibros);
router.post('/libros', libroController.insertarLibros);
router.delete('/libros/:id', libroController.eliminarLibros);
router.put('/libros/:id', libroController.actualizarlibros);
router.get('/libros/:buscarN', libroController.buscarlibros);

module.exports = router;
