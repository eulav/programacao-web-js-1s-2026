//verificar se é par ou ímpar

function verificarParidade(num){ 
    let paridade;
    if(num % 2 == 0){
        paridade = true;
    }else{
     
        paridade = false;
    }
}

function apresentarMensagemParidade(num2){
    let recebeResultadoParidade = verificarParidade(num2);
    if(recebeResultadoParidade = true){
        console.log(`${num2} é par`);
    }else{
        console.log(`${num2} é ímpar`);
    }
}

apresentarMensagemParidade(1);
apresentarMensagemParidade(11);
apresentarMensagemParidade(2);
apresentarMensagemParidade(355489);
apresentarMensagemParidade(11111110);


//

//cálculo IMC

function calcularIMC(peso, altura){
    let calcIMC = peso / altura**2;
    let classificacaoIMC;

    if(calcIMC <= 18.5){
        classificacaoIMC = "Baixo peso";
    }else if (calcIMC >18.5 & calcIMC <=24.9){
        classificacaoIMC = "peso normal";
    }else if(calcIMC >24.9 & calcIMC <=29.9){
        classificacaoIMC="Excesso de peso";
    }else if(calcIMC >29.9 & calcIMC <=35){
        classificacaoIMC="Obesidade";
    }else{
        classificacaoIMC="Obesidade extrema";
    }

    console.log(`Peso = ${peso}, altura = ${altura}, IMC.valor = ${calcIMC.toFixed(2)}, IMC.categoria = ${classificacaoIMC}`);
}

calcularIMC(50,1.70);
calcularIMC(65,1.70);
calcularIMC(80,1.70);
calcularIMC(95,1.70);
calcularIMC(110,1.70);
