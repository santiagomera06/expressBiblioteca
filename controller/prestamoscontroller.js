let db = require("../config/database");

class prestamoController {
    
    static async obtenerPrestamos(req, res) {
        let [resultado] = await db.query(`
            SELECT p.id, u.nombre AS usuario, l.titulo AS libro, p.fecha_prestamo, p.fecha_devolucion, p.estado 
            FROM Prestamos p
            JOIN Usuarios u ON p.usuario_id = u.id
            JOIN Libros l ON p.libro_id = l.id
        `);
        res.json(resultado);
    }

    static async realizarPrestamo(req, res) {
        let { usuario_id, libro_id } = req.body;
        let [libro] = await db.query('SELECT disponibilidad FROM Libros WHERE id = ?', [libro_id]);

        await db.query(
            'INSERT INTO Prestamos (usuario_id, libro_id) VALUES (?, ?)',
            [usuario_id, libro_id]
        );

        await db.query('UPDATE Libros SET disponibilidad = FALSE WHERE id = ?', [libro_id]);

        res.status.json({ message: 'Préstamo registrado' });
    }

    static async devolverLibro(req, res) {
        let { id } = req.params;

        let [prestamo] = await db.query('SELECT libro_id FROM Prestamos WHERE id = ? AND estado = "prestado"', [id]);

        await db.query(
            'UPDATE Prestamos SET estado = "devuelto", fecha_devolucion = CURRENT_DATE WHERE id = ?',
            [id]
        );

        await db.query('UPDATE Libros SET disponibilidad = TRUE WHERE id = ?', [prestamo[0].libro_id]);

        res.json({ message: 'Libro devuelto con éxito' });
    }

    // Obtener préstamos activos
    static async prestamosActivos(req, res) {
        let [resultado] = await db.query(`
            SELECT p.id, u.nombre AS usuario, l.titulo AS libro, p.fecha_prestamo 
            FROM Prestamos p
            JOIN Usuarios u ON p.usuario_id = u.id
            JOIN Libros l ON p.libro_id = l.id
            WHERE p.estado = 'prestado'
        `);
        res.json(resultado);
    }
}

module.exports = prestamoController;
