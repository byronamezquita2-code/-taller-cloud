const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Servidor Cloud funcionando");
});

app.get("/mensaje", (req, res) => {
    res.json({
        mensaje: "Respuesta recibida desde el servidor Cloud"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});