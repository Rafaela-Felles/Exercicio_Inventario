# API de Controle de Inventário de Patrimônio

## Descrição do projeto

Este projeto consiste em uma API para controle de inventário de patrimônio.

A API permite realizar operações de cadastro, consulta, alteração e exclusão de patrimônios.

Os dados são armazenados temporariamente em um arquivo JSON.

## Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* JSON

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## Execução

Para iniciar o servidor, execute:

```bash
node server.js
```

O servidor será iniciado na porta 3000.

A API pode ser acessada em:

```text
http://localhost:3000/inventario
```

## Rotas disponíveis

| Método | Rota              | Função                |
| ------ | ----------------- | --------------------- |
| GET    | `/inventario`     | Consultar patrimônios |
| POST   | `/inventario`     | Cadastrar patrimônio  |
| PUT    | `/inventario/:id` | Alterar patrimônio    |
| DELETE | `/inventario/:id` | Excluir patrimônio    |

## Exemplos de requisições

### GET

```text
GET http://localhost:3000/inventario
```

Retorna todos os patrimônios cadastrados.

### POST

```text
POST http://localhost:3000/inventario
```

Exemplo de JSON enviado:

```json
{
    "id": 4,
    "item": "Mouse",
    "local": "Laboratório 02",
    "dataRegistro": "2026-09-29",
    "valor": 50,
    "patrimonio": "PAT-00128"
}
```

Resposta:

```text
Cadastro recebido
```

### PUT

```text
PUT http://localhost:3000/inventario/1
```

Exemplo de JSON enviado:

```json
{
    "item": "Notebook Dell Atualizado",
    "local": "Laboratório 02",
    "dataRegistro": "2026-09-29",
    "valor": 4000,
    "patrimonio": "PAT-00125"
}
```

Resposta:

```text
Cadastro atualizado com sucesso
```

### DELETE

```text
DELETE http://localhost:3000/inventario/2
```

Resposta:

```text
Cadastro Excluido com Sucesso!
```

## Evidências dos testes

Os testes das rotas da API foram realizados utilizando o Thunder Client.

As evidências estão disponíveis na pasta `evidencias`.

### GET

Consulta dos patrimônios cadastrados.

### POST

Cadastro de um novo patrimônio.

### PUT

Alteração de um patrimônio existente.

### DELETE

Exclusão de um patrimônio.
# Exercicio_Inventario
