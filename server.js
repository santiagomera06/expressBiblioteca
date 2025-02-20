const express = require('express');
const app = express();
const LibroRouter = require('./Router/libroRouter');
const prestamosRoutes = require('./Router/libroRouter');


app.use(express.json());


app.use('/api', LibroRouter);
app.use("/api/prestamos", prestamosRoutes);

// Iniciar el servidor
const PORT = 4002;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
