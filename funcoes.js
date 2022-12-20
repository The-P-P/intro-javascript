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



function multiplaca(num = 1, num = 1 ) {
    return num *  num
};

console.log(multiplaca(soma1 (4, 5 )))