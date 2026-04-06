const express = require('express');

//const movimentacoes = require('./estoque');

const app = express();

const PORT = 8080;

//app.length('/',(req, res)=>{
  //  res.send("Olá, web")
//});

//app.get

let estoque = []

function adicionarNoEstoque(id,item,quantidade){
    estoque.push(id)
    estoque.push(item);
    estoque.push(quantidade);
}

function removerDoEstoque(id){
    let antepenultimaPosi = estoque.length-3
    for (let i=0;i<estoque.length; i++){
        if (estoque[i] == id){
            if(i==0){
                estoque.shift();
                estoque.shift();
                estoque.shift();

                /**for (let y=i; y<estoque.length;y++){
                    estoque[y]=estoque[y+1];
                estoque.shift(); */
            }
            }
            else if(i==antepenultimaPosi){
                estoque.pop();
                estoque.pop();
                estoque.pop();
            }
            else{
                estoque.slice(i,3);
                /*
                let tempId = estoque[i];
                let tempNome = estoque[i+1]
                let tempQtde = estoque[i+2]
            for (let y=i; y<estoque.length;y++){
                estoque[y]=estoque[y+3];
            }
            estoque[estoque.length-1] = temp;
            estoque.pop();
            */
            }
        }
    };


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
