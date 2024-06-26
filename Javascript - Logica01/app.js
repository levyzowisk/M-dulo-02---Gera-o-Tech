// let variavel = 2
// var varialvel = 3
// console.log(variavel)

// let p1 = "Oi"
// let p2 = "Levy"

// let texto = p1 + ' ' + p2
// console.log(texto)
// let texto2 = `Texto para teste é ${texto}`
// console.log(texto2)

// let valor1 = Number(prompt("Digite o valor 1: "))
// let valor2 = Number(prompt("Digite o valor 2: "))

// let adicao = valor1 + valor2
// let sub = valor1 - valor2
// let mult = valor1 * valor2
// let div = valor1 / valor2

// let operacao = `O resultado da divisão é ${div}`

// alert(operacao)


// let peso = Number(prompt("Digite seu peso:"))
// let altura = Number(prompt("Digite sua altura:"))

// let imc = peso/altura**2
// let imcFormatado = imc.toFixed(2)


// let result = `O seu índice de massa corporal é ${imcFormatado}`


// alert(result)

// let peso = 91
// let altura = 1.76

// let imc = peso/altura**2
// let imcFormatado = imc.toFixed(2)

// console.log(imc)
// console.log(imcFormatado)

//  Função que irá corresponder ao usuário clicar no botão
function idade() {
    // Estou recebendo um dado usando a funcionalidade que é disposto no objeto window(Janela)
    let ano = window.prompt('Digite o ano em que você nasceu?')
    window.alert(`Olá, sua idade é de ${2024 - ano}`)
}

function response_click() {
    let nome = window.prompt('Qual é o seu nome?')
    let ano = window.prompt('Digite o ano em que você nasceu?')
    window.alert(`Olá, ${nome}! É um prazer te conhecer! Sua idade é de ${2024 - ano}`)
}