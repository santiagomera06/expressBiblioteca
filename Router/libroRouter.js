const express = require('express');
const router = express.Router();
const libroController = require('../Controller/libroController');


router.get('/libros', libroController.obtenerLibros);
router.post('/libros', libroController.insertarLibros);
router.delete('/libros/:id', libroController.eliminarLibros);
router.put('/libros/:id', libroController.actualizarLibros);
router.get('/libros/:buscarN', libroController.buscarLibros);



module.exports = router;
