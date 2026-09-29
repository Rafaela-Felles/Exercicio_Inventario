const express = require("express");
const cadastro = require("../dados.json");

const mostrarCadastro = (req, res) =>{
    res.send(cadastro)
}

const novoCadastro = (req, res) => {
    if (req.body) {
        res.send("Cadastro recebido");
        cadastro.push(req.body)
    } else {
        res.send("ERRO ao receber cadastro")
    }
}

const excluirCadastro = (req, res) => {
    const id = req.params.id;

    cadastro.forEach((item, indice) => {
        if (item.id == id){
            cadastro.splice(indice, 1);
        }
    });

    res.send("Cadastro Excluido com Sucesso!")
};

const alterarCadastro = (req, res) => {

    const id = req.params.id;
    const dados = req.body;

    cadastro.forEach((item) => {

        if (item.id == id) {

            item.item = dados.item;
            item.local = dados.local;
            item.dataRegistro = dados.dataRegistro;
            item.valor = dados.valor;
            item.patrimonio = dados.patrimonio;

        }
    });
    res.send("Cadastro atualizado com sucesso");
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const porta = 3000;

//ROTAS
app.get("/inventario", mostrarCadastro);
app.post("/inventario", novoCadastro);
app.delete("/inventario/:id", excluirCadastro);
app.put("/inventario/:id", alterarCadastro);

app.listen(porta, () =>{
    console.log(`servidor: http://127.0.0.1:${porta}/inventario`);
});
