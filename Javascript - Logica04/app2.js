let a = 2 //Number(prompt("Digite um número:")); 
let b = 3 //Number(prompt("Digite um número:")); 
let c = 4 //Number(prompt("Digite um número:")); 

let number1 = null;
let number2 = null;
let number3 = null;

if (b > a && b > c) {
    number1 = b;
    if (a > c) {
        number2 = a;
        number3 = c;
    } else {
        number2 = c;
        number3 = a;
    }
} else if (c > a && c > b) {
    number1 = c;
    if (a > b) {
        number2 = a;
        number3 = b;
    } else {
        number2 = b;
        number3 = a;
    }
} else if (a > b && a > c) {
    number1 = a;
    if (b > c) {
        number2 = b;
        number3 = c;
    } else {
        number2 = c;
        number3 = b;
    }
}

let saida = document.getElementById('janela')
saida.innerHTML = `${number1}, ${number2}, ${number3}`   
