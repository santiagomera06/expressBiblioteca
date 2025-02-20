let db = require("../config/database");

class libroController {
    static async obtenerLibros(req, res) {
        let [resultados] = await db.query('SELECT * FROM Libros');
        res.json(resultados);
    }

    static async insertarLibros(req, res) {
        let { titulo, autor, año_publicacion } = req.body;
        let [resultados] = await db.query(
            'INSERT INTO Libros (titulo, autor, año_publicacion) VALUES (?, ?, ?)',
            [titulo, autor, año_publicacion]
        );
        res.json({ msj: 'Libro creado', id: resultados.insertId });
    }

    static async eliminarLibros(req, res) {
        let { id } = req.params;
        let [resultados] = await db.query('DELETE FROM Libros WHERE id = ?', [id]);
        res.json({ msj: 'Libro eliminado' });
    }

    static async actualizarLibros(req, res) {
        let { id } = req.params;
        let { titulo, autor, año_publicacion, disponibilidad } = req.body;
        let [resultados] = await db.query(
            'UPDATE Libros SET titulo = ?, autor = ?, año_publicacion = ?, disponibilidad = ? WHERE id = ?',
            [titulo, autor, año_publicacion, disponibilidad, id]
        );
        res.json({ msj: 'Libro actualizado' });
    }

    static async buscarLibros(req, res) {
        let { buscarN } = req.params;
        let [resultados] = await db.query('SELECT * FROM Libros WHERE titulo LIKE?', ['%' + buscarN + '%']);
        res.json(resultados);
        
    }
}

module.exports = libroController