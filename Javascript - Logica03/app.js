let array = [
    {
        Esporte: 'Futebol',
        Regiao: 'Nordeste',
        Time: 'Siara Sport Club'
    },
    {
        Esporte: 'Formula 1',
        Regiao: 'Suldeste',
        Time: 'Mclaren'
    },
    {
        Esporte: 'Futebol',
        Regiao: 'Nordeste',
        Time: 'Laion'
    },
    {
        Esporte: 'Basquete',
        Região: 'Nordeste',
        Time: 'Carcalaion'
    }
]

// console.log(array[1])
// console.log(array[1].Esporte)
// console.log(`O maior time do ${array[0].Regiao} é o ${array[2].Time}`)
// console.log(`No ${array[0].Regiao} existe dois times, um joga a serié b e outro a serié A, qual será os times respectivamente? ${array[0].Time}, ${array[2].Time}`)

let compra = {
    compraId: 1,
    nomeobjeto: "Tênis",
    quantidade: 2,
    valor: 347.67
}

// console.log(`A compra do ${compra.nomeobjeto} no valor de  ${compra.valor}  R$, não pode ser efetuada.`)

const pedido = [
        { 
            id:1,
            nome: "Camiseta", 
            quantidade: 10, 
            valor: 50.00 
        },
        { 
            id:2,
            nome: "Calça Jeans", 
            quantidade: 15, 
            valor: 80.00 
        },
        { 
            id:3,
            nome: "Tênis", 
            quantidade: 8, 
            valor: 120.00 
        },
        { 
            id:4,
            nome: "Boné", 
            quantidade: 5, 
            valor: 25.00 
        },
    
      ];
    let usuarios = [
        {
            id:1,
            nome:"Jeff",
            cpf:"983748276",
            email:"jeff@gmail.com",
            telefone:"834792387",
            productId:2
        },
        {
            id:2,
            nome:"Jack",
            cpf:"54234322",
            email:"jack@gmail.com",
            telefone:"23241343",
            productId:4
        },
        {
            id:3,
            nome:"Jonas",
            cpf:"34252452342",
            email:"jonas@gmail.com",
            telefone:"23143132",
            productId:1
        },
        {
            id:4,
            nome:"Maria",
            cpf:"324252342",
            email:"maria@gmail.com",
            telefone:"87234683276",
            productId:3
        }
    ]

// calcule o valor da compra de cada usuario



// ped01 = pedido[0].quantidade*pedido[0].valor
// console.log(ped01)
// ped02 = pedido[1].quantidade*pedido[1].valor
// console.log(ped02)
// ped03 = pedido[2].quantidade*pedido[2].valor
// console.log(ped03)
// ped04 = pedido[3].quantidade*pedido[3].valor
// console.log(ped04)

// console.log(`${usuarios[0].nome} fez um pedido no valor de ${ped01}`)
// console.log(`${usuarios[1].nome} fez um pedido no valor de ${ped02}`)
// console.log(`${usuarios[2].nome} fez um pedido no valor de ${ped03}`)
// console.log(`${usuarios[3].nome} fez um pedido no valor de ${ped04}`)

// Forme a seguinte frase ("Um email com a chave pix de valor ... foi enviado para  ...") para os quatro elementos

// console.log(`Um email com a chave pix de valor ${pedido[0].valor} foi enviado para ${usuarios[2].nome}`)
function date(){
    let agora = new Date
    // Preciso chmar o id do elemento do html
    let saida = document.getElementById('saida')
    // Oque irá aparecer na tela do usuário
    saida.innerHTML = `Oque eu recebi do sistema foi ${agora}`
}

function info() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'levy', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}