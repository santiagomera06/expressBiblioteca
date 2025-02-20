const express = require('express');
const router = express.Router();
const prestamoController = require('../Controller/prestamoscontroller');

router.get('/prestamos', prestamoController.obtenerPrestamos);
router.post('/prestamos', prestamoController.realizarPrestamo);
router.put('/prestamos/:id/devolver', prestamoController.devolverLibro);
router.get('/prestamos/activos', prestamoController.prestamosActivos);

module.exports = router;
