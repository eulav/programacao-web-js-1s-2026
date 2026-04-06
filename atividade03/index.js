const express = require('express');

const movimentacoes = require('./estoque');

const app = express();

const PORT = 8080;

app.length('/',(req, res)=>{
    res.send("Olá, web")
});

app.get

app.get('/estoque/adicionarNoEstoque/:id/:nome/:qtd', (req,res)=>{
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = parseInt(req.params.qtd);
    //let op = req.params.op;
    adicionarNoEstoque(id,nome,qtd);
    
})

app.get('/estoque/removerDoEstoque/:id', (req,res)=>{
    let id = req.params.id;
    //let op = req.params.op;
    removerDoEstoque(id);
    
})

/*
adicionarNoEstoque("0","Laranja",10);
adicionarNoEstoque("2","Limao",3);
adicionarNoEstoque("3","Ameixa0",4);
adicionarNoEstoque("4","Pera",8);
adicionarNoEstoque("5","Uva",9);
adicionarNoEstoque("6","Maca",5);
adicionarNoEstoque("8","Melao",10);
adicionarNoEstoque("9","Melancia",2);

console.log(estoque.length);
for (let i=0;i<estoque.length; i++){
    console.log(estoque[i],"\n");
}
removerDoEstoque("2");
removerDoEstoque("5");
removerDoEstoque("0");
removerDoEstoque("8");

console.log(`\nNovo tamanho:  ${estoque.length}`);

for (let i=0;i<estoque.length; i++){
    console.log(estoque[i],"\n");
}
*/