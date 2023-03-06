//ESTRUTURA DE REPETIÇÃO 1º EXERCÍCIO
/*const indece = 13
let soma = 0
let k = 0
for (; k < indece;) {
k++
soma = soma + k
console.log(soma)   
}*/


//ESTRUTURA PARA FIBONACCI
/*function fibonacci() {
    let numero = 1
    let penultimo = 0
    let ultimo = 1
    for (var i = 0; i < 10 ; i++){
        numero = ultimo + penultimo
        penultimo = ultimo
        ultimo = numero
        console.log(numero)
    }
}
fibonacci();*/


//ESTRUTURA VETOR JSON
/*let menorValor = 0;
let maiorValor = 0;
let ArrayNumeros = [];
let soma = 0
let media = 0

fetch("./dados/dados.json").then((response) => {
    response.json().then((dias) => {
        dias.forEach((valoresArray) => {
            ArrayNumeros.push(valoresArray.valor);
        });
        let numerosValidos = ArrayNumeros.filter(valor => Number.isFinite(valor));
        menorValor = Math.min(...numerosValidos);
        maiorValor = Math.max(...numerosValidos);

        console.log("Menor valor: " + menorValor);
        console.log("Maior valor: " + maiorValor);

        for (var i = 0; i < ArrayNumeros.length; i++){
            soma += ArrayNumeros[i]
        }
        console.log(soma)
        media = soma / 21
        console.log(media)
        if (numerosValidos > media){
            console.log(numerosValidos.map())
        }
        
    });
});*/


//ESTRUTURA FATURAMENTO MENSAL
/*const sp = 67.83643
const rj = 36.67866
const mg = 29.22988
const es = 27.16548
const others = 19.84953
const total = (sp + rj + mg + es + others)
console.log(`Esse é o total ${total}`)

const psp = (sp*total)/100
const prj = (rj*total)/100
const pmg = (mg*total)/100
const pes = (es*total)/100
const pothers = (others*total)/100
console.log(`O percentual de SP foi ${psp}`)
console.log(`O percentual do RJ foi ${prj}`)
console.log(`O percentual de MG foi ${pmg}`)
console.log(`O percentual do ES foi ${pes}`)
console.log(`O percentual dos outros foi ${pothers}`)*/


//Palavra invertida
/*let string = prompt("Digite uma Palavra: ");
let invertedString = "";
for (let i = string.length - 1; i >= 0; i--) {
  invertedString += string[i];
}
console.log(`Palavra original: ${string}`);
console.log(`Palavra invertida: ${invertedString}`);*/