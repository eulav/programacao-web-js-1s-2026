//FUNCTION - bloco de codigo que pode ser acionado
// DRY - dont repear yourself

function imprimirOlaMundo(){
    console.log("Olá, mundo!");
}

imprimirOlaMundo();

function somar(a , b){//função recebendo parâmetros
    let soma = a+b;

    console.log(`resultado ${soma}`);
}

somar(50,1);
somar(3,1);
somar(6,12);


//Estruturas de repetição 

for(let i=0;i<=10;i++){
    console.log(i);
}

i=0;

while (i<=5){
    console.log(i);
    i++;
}


//estrutura condicional
let idade = 18;

if(idade>=18){
    console.log("É maior de idade");
}else{
    console.log("Não maior de idade");
}

