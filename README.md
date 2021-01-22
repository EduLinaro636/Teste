![Projeto Customers](http://revistapress.com.br/wp-content/uploads/2018/12/Sem-t%C3%ADtulo19.png)

By [Stefanini](https://stefanini.com/).

# Projeto Customers
O projeto Customers é um exemplo de como desenvolver uma API na plataforma Node.js, inicialmente este projeto está usando
[Body-Parser](https://github.com/expressjs/body-parser/), [Express 4](http://expressjs.com/) e 
[NeDB](https://github.com/louischatriot/nedb/).

## Executando
Antes de tudo, cheque se você tem [Node.js](http://nodejs.org/) instalado. Depois basta clonar o projeto localmente,
instalar as dependências e por fim, inicializar o projeto.

```sh
git clone git@github.com:leandrocapuano/hackaton-orbitall-2021.git
cd customers
npm install
node src/server.js
```

Sua aplicação deve ser executada como [localhost:3000](http://localhost:3000/).

## cURL
Pode chamar as APIs via cURL, um exemplo de um consumo de como listar todos os customers cadastrados:

```console
curl -X GET \
  http://localhost:3000/customers \
  -H 'cache-control: no-cache'
```

## Bug encontrado
Se você encontrar qualquer tipo de bug, sinta se a vontade para criar uma issue no GitHub ou procure o gafanhoto e ele
estará apto a te ajudar nesta questão de bug, nós encorajamos vocês a resolver o problema e subir a solução no GitHub.

https://github.com/leandrocapuano/customers/issues

## Colaboradores
* Leandro Ferreira Machado Capuano (https://github.com/leandrocapuano)

## Licença
MIT License. Copyright 2021 Stefanini https://stefanini.com/
