let pessoas = [];
let id = 0;

function criarPessoa(pessoa) {
    pessoa.id = ++id;
    pessoas.push(pessoa);
}

function listarPessoas() {
    return pessoas;
}

function buscarPessoa(id) {
    return pessoas.find(p => p.id == id);
}

function atualizarPessoa(id, dados) {
    const index = pessoas.findIndex(p => p.id == id);
    if (index !== -1) {
        pessoas[index] = { ...pessoas[index], ...dados };
        return true;
    }
    return false;
}

function deletarPessoa(id) {
    const index = pessoas.findIndex(p => p.id == id);
    if (index !== -1) {
        pessoas.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {
    criarPessoa,
    listarPessoas,
    buscarPessoa,
    atualizarPessoa,
    deletarPessoa
};
