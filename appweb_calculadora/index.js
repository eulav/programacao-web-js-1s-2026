//comandos npm init -y / 

//carregar framework express

const express = require('express');

const calculadora = require('./calculadora');

//cria um app do tipo express
const app = express();

//declara porta de execução da aplicação
const PORT = 8080;

//define rota raiz "/" e resposta da aplicacao
app.get('/',(request, response)=>{
    response.send('Olá, WEB!')
});

//URL fixa
app.get('/ola/lavinia', (req, res)=>{
    res.send('Olá, Lavínia')
});

//URL com parâmetro
app.get('/ola/:nome', (req,res)=>{
    res.send(`Olá, ${req.params.nome}!`);
})

const log = []


//URL com parâmetro
app.get('/calculadora/somar/:a/:b', (req,res)=>{
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    //let op = req.params.op;
    let resultado = calculadora.somar(a,b);
    log.push(`${a} + ${b} = ${resultado} <br>`);
    res.send(`${a} + ${b} = ${resultado}`);
    
})

app.get('/calculadora/log', (req,res)=>{
    resultado = "";
    log.forEach(log => {
        resultado += log;
    });
    res.send(resultado);

})

//inicializar a aplicação na porta definida
app.listen(PORT, () => {
    console.log("app rodando na porta " + PORT);
});