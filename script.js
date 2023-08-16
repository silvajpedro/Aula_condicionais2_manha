// condições

//operadores de comparação
/*
> maior que
< menor que
>= maior ou igual
<= menor ou igual
== operador de igualdade
=== estritamente igual
!= diferente de 
!== estrimamente desigual -> vai verificar se o tipo valor são diferentes
*/

//condições simples

let idade = 16

if(idade > 18){
    console.log("você é maior de idade")
}
if(idade < 18){
    console.log("você é menor de idade")
}
//em vez de fazermos isso aqui acima, podemos utilizar as condicionais compostas

//condições compostas
idade = 12

if(idade > 18){
    console.log("você é maior de idade")
} else{
    console.log("você é menor de idade")
}

//condicionais aninhadas
// utilizando condicionais aninhadas podemos colocar mais opçoes de uma condicao

let pratoDoDia = "feijoada"
//feijoada
//lasanha
//brigadeiro

pratoDoDia = "lasanha"


if(pratoDoDia == "feijoada"){
    console.log("que maravilha")
} else if(pratoDoDia == "lasanha"){
    console.log("melhor ainda")
} else if(pratoDoDia == "brigadeiro"){
    console.log("muito bom")
} else{
    console.log("o prato do dia e salada")
}


let tamanhoCamiseta = "gg"

// aqui temos 4 opções diferentes para uma condição
if(tamanhoCamiseta == "p"){
    console.log("o tamanho da sua camisa e P")
} else if(tamanhoCamiseta == "m"){
    console.log("o tamanho da camiseta e M")
} else if(tamanhoCamiseta == "g"){
    console.log("o tamanho da sua camiseta e G")
} else if(tamanhoCamiseta == "gg"){
    console.log("o tamanho da camiseta e GG")
} else{
    console.log("não tem esse tamanho")
}


//operadores lógicos

// && -> (and) vai verificar se as duas condições são verdadeiras, ele só EXECUTA SE AMBAS AS CONDIÇÕES SÃO VERDADEIRAS

let lanche = "hamburguer"

let sobremesa = "sorvete"

if(lanche == "hamburguer" && sobremesa == "sorvete"){
    console.log("estou feliz")
} else{
    console.log("estou triste")
}


let cartao = -100

let idadeUsuario = 18


if(cartao == 100 && idadeUsuario >= 18){
    console.log("voce pode fazer essa compra")
} else{
    console.log("voce nao pode fazer essa compra")
}


// || -> (or) -> vai verificar se as condições são verdadeira, e VAI EXECUTAR SE UMA DAS DUAS FOR VERDADEIRA
// ou cartao == 100 ou idadeUsuario2 maior ou igual a 18

let cartao2 = 50

let idadeUsuario2 = 18

if(cartao2 == 100 || idadeUsuario2 >= 18){
    console.log("voce pode fazer essa compra")
} else{
    console.log("voce não pode fazer essa compra")
}

// ! -> (not) sempre vai negar a sua ação, exemplo: se você fala dia, ele fala noite
// se você coloca true ele vai retornar false, sempre será o contrário
console.log(!true)
console.log(!0)

let tempo = "dia"

if(!tempo == "dia"){
    console.log("está de dia")
} else{
    console.log("está de noite")
}





