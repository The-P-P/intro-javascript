// comparacao implicita == (valor) )

const numero = 5;
const texto = '5'

console.log(numero == texto)

// comparacao implicita === (tipo de dado e o valor) 

console.log(numero === texto)

// typeof 

console.log(typeof numero)
console.log(typeof texto)

// conversao explicita

Number()
String()

//ternarios

const idade_minima = 18;
const idade_cliente = 16;

if ( idade_cliente >= idade_minima){
    console.log('cerveja')
}
else{
    console.log('suco')
}
            //condicao                       //true     //false
console.log(idade_cliente >= idade_minima ? 'cerveja' : 'suco')


// templete str

const nome = 'pp'
const idade = 2022 - 2001
const cidade = 'Sao Luis'

const apresentacao1 = 'meu apelido eh ' + nome + ', minha idade eh ' + idade + ' moro em ' + cidade;

const apresentacao2 = `meu apelido eh ${nome} , minha idade eh ${idade} moro em cidade ${cidade}`;

console.log(apresentacao1)
console.log(apresentacao2)
