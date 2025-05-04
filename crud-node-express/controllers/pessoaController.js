const Pessoa = require("../models/pessoa");

function criar(req, res) {
    Pessoa.criarPessoa(req.body);
    res.status(201).send("Pessoa criada com sucesso!");
}

function listar(req, res) {
    res.json(Pessoa.listarPessoas());
}

function atualizar(req, res) {
    const sucesso = Pessoa.atualizarPessoa(req.params.id, req.body);
    if (sucesso) res.send("Pessoa atualizada com sucesso!");
    else res.status(404).send("Pessoa não encontrada.");
}

function deletar(req, res) {
    const sucesso = Pessoa.deletarPessoa(req.params.id);
    if (sucesso) res.send("Pessoa deletada com sucesso!");
    else res.status(404).send("Pessoa não encontrada.");
}

module.exports = {
    criar,
    listar,
    atualizar,
    deletar
};
