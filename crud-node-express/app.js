const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const pessoaRoutes = require("./routes/pessoaRoutes");
app.use("/pessoas", pessoaRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
