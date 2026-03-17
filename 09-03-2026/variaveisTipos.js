//Strings

let nome = "João"; //let permite que o valor da variavel seja alterado
const sobrenome = 'Santos';//const não permite alteração do valor
nome = 'João'; //aparece no final
let templateString = `O meu nome é ${nome} ${sobrenome}`;

console.log(templateString);

//number - não diferencia por poonto flutuante
let A = 2;
let B = 5.56;
let C = -3.14;
const PI = 3.14;

console.log(typeof A);
console.log(typeof C);

//boolean
let veradeiro = true;
let falso = false;
console.log(typeof verdadeiro);

//Operadore Lógicos

let E = veradeiro && falso;
let Ou = veradeiro || falso;
console.log(E);
console.log(Ou);


let maior_que = B > A; //Outros: >=, <, <=, ++, !=
console.log(`${B}>${A}=${maior_que}`);

//Arrays

let numeros = [1, 3.14, -7, 99, 505.67];

//como acessar elementos
console.log(`numeros[0] = ${numeros[0]}`); 
console.log(`numeros[3] = ${numeros[3]}`);
console.log(typeof numeros);

//object

/*
let nome1 = "Lavinia";
let cpf = 123;
let telefone = 61999999;
*/ 
//com o object essas informações tornam-se referentes a um só membro. com o object você monta tipos completos

let pessoa = {
    nome: 'Lavinia',
    cpf: 123, 
    telefone: 6199999
    //ex: de array telefones: [619995, 6199887]
}

console.log(pessoa);
console.log(`pessoa.nome=${pessoa.nome}`);