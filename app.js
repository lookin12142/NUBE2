const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola desde la ruta principal!');
});

app.get('/clientes', (req, res) => {
    res.send('Aquí están los 3 clientes.');
});

app.get('/productos', (req, res) => {
    res.send('Aquí están los 3 productos.');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`La aplicación está corriendo en el puerto ${PORT}`);
});
