// let qtd_compra = Number(prompt("Digite quantas maças quer comprar:"))

// if(qtd_compra < 12){
//     let calc = qtd_compra * 0.30.toFixed(1)
//     let saida = document.getElementById('janela')
//     saida.innerHTML = `O valor da sua compra é ${calc}`
// }
// else{
//     let calc = qtd_compra * 0.25.toFixed(1)
//     let saida =document.getElementById('janela')
//     saida.innerHTML = `O valor da sua compra é ${calc}`

// }

let a = 2  //Number(prompt("Digite um número:")) 
let b = 3  //Number(prompt("Digite um número:")) 
let c = 4  //Number(prompt("Digite um número:")) 

let number1 = null
let number2 = null
let number3 = null
// let case1 = null
// let case2 = null
// let case3 = null

if(b>a && b>c){
    // case1 = true
    number1 = b
    if(a>c){
        number2 = a
        number3 = c
    } else{
        number2 = c
        number3 = a       
    }
}
//2 3 4
    else if(c > a && c >b ){
        // case2 = true
        number1 = c;//4
        if (a >b ){
            number2 = a;
            number3 = b;
        } else {
            number2 = b;
            number3 = c;
        }
    }
// else if (c > a && c > b) {
//     number1 = c;
//     if (a > b) {
//         number2 = a;
//         number3 = b;
//     } else {
//         number2 = b;
//         number3 = a;
//     }
// }
else if(a>b && a>c) {
    // case3 = true
    number1 = a
    if(b>c){
        number2 = b
        number3 = c
    } else {
        number2 = c
        number3 = b
    }
}
// let saida = document.getElementById('janela')
// saida.innerHTML = `${number1}, ${number2}, ${number3}` 
console.log(`${number1}, ${number2}, ${number3}`)  

// if(case1 == true){
//     let saida = document.getElementById('janela')
//     saida.innerHTML = `${number1}, ${number2}, ${number3}`
// }

// if(case2 == true){
//     let saida = document.getElementById('janela')
//     saida.innerHTML = `${number1}, ${number2}, ${number3}`    
// }

// if(case3 == true){
//     let saida = document.getElementById('janela')
//     saida.innerHTML = `${number1}, ${number2}, ${number3}`    
// }


