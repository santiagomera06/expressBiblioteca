const express = require("express");
const prestamoController = require("../controller/prestamoController");

const router = express.Router();

router.get("/", prestamoController.obtenerPrestamos);       // Obtener todos los préstamos
router.post("/", prestamoController.realizarPrestamo);      // Registrar un préstamo
router.put("/:id", prestamoController.devolverLibro);       // Devolver un libro
router.get("/activos", prestamoController.prestamosActivos); // Obtener préstamos activos

module.exports = router;
