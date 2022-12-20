//var

var altura1 = 5;
var comprimento1 = 7;

area1 = altura1 * comprimento1;

console.log(area1)

var area1;


//let

let altura2 = 5;
let comprimento2 =  10;
let forma2 =  'r'
let area2

if (forma2 === 'r') {
    area2 = altura2 * comprimento2;
}
else {area2 = (altura2 * comprimento2) / 2;
}

console.log(area2)


//const

const forma3 = 't';
const altura3 =  5;
const comprimento3 = 6;
let area3;

if (forma3 === 'q'){
    area3 =  altura3 * comprimento3; 
}
else {
    area3 = (altura3 * comprimento3)/2;
}

console.log(area3)

// booleand

const usuario = true;
const conta = false;

// truthy ou falsy

// 0 -> false
// 1 -> true

console.log(0 == false)
console.log('' == false)
console.log(1 == true)

//null -> vazio
//undefined

let varnull = null;

console.log(varnull)



let minhavar;

console.log(minhavar)

let num1 = 3;
let text1 = 'pedro';

console.log(typeof num1)
console.log(typeof text1)


//tipos de dados
//booleanos

//conversao implicita
const numnum = 123;
const numstr = '123';
let comparacao ;

console.log(numnum === numstr)
console.log(numnum == numstr)
console.log(numnum + numstr)

//number()
console.log(numnum + Number(numstr))
console.log(numnum === Number(numstr))

//string()

console.log(String(numnum) === numstr)


//conversao explicita
