let x = '';
console.log(x);
x = 'oi';
// o codigo vai ser ledo pelo computador em ordem 

// declaracao de funcao

function imprime(txt){
    console.log(txt)
};

// executa a funcao ( 1 ou + vezes)

imprime(soma());
imprime ('o carro do ovo passando na sua porta ');

// formas de funcoes

function soma(){
    return 2 + 2;

}

console.log(soma())

//parametros de funcoes 

function soma1 (num, num){
    return num + num;
}

console.log(soma1(2,2))
console.log(soma1(2434,2221))
console.log(soma1(25,400))

//parametros x argumentos

// ordem dos parametros

function nomeIdade (nome, idade){
    return `meu nome eh ${nome} e minha idade eh ${idade}`
}

console.log(nomeIdade(21, 'pp'))



function multiplaca(num1 = 1, num2 = 1 ) {
    return num1 *  num2
};

console.log(multiplaca(soma1 (4, 5 )))

// expressao de funcao 
//diferenca principal : hoisting
//funcoes e var sao "listadas" no topo do arquivo

console.log(apresentar())
function apresentar(){
    return 'ola';
}

console.log(soma2(1, 1))
const soma2 = function(num1, num2){
    return num1 + num2
}

//arrow-function

const arrow = nome => `meu nome eh ${nome}`;
const soma3 = (num1, num2) => num1 + num2;

// arrow com + de uma linha

const nump = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return 'somente numeros de 1 a 9';
    }
    else{
        return num1 + num2;
    }
}

// hoinsting: arrow se comporta com expressao