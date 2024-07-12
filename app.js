// const getData = async () => {
//     try {
//         const response = await axios.get("https://6691119c26c2a69f6e8e4bf2.mockapi.io/products/Produtos")
//         // const produtos = response.data
//         console.log(response)

//         let tbody = document.querySelector("tbody")
//         response.data.forEach(element => {
//             let linha = document.createElement("tr")
//             linha.innerHTML = `
//                 <td>${element.id}</td>
//                 <td>${element.nome}</td>
//                 <td>${element.tipo}</td>
//                 <td>${element.descricao}</td>
//                 <td>${element.material}</td>
//             `
//             tbody.appendChild(linha)
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }



const getData = async () => {
    try {
        const response = await axios.get("https://6691119c26c2a69f6e8e4bf2.mockapi.io/products/Produtos")
        // const produtos = response.data
        console.log(response)

        let tbody = document.querySelector("body")
        response.data.forEach(element => {
            let linha = document.createElement("div")
            linha.innerHTML = `
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${element.id}</li>
                    <li class="list-group-item">${element.nome}</li>
                    <li class="list-group-item">${element.tipo}</li>
                    <li class="list-group-item">${element.descricao}</li>
                    <li class="list-group-item">${element.material}</li>
                </ul>
</div>
            
            `
//             linha.innerHTML = `
//                 <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                 <p class="card-text">${element.id}</p>
//                 <p class="card-text">${element.nome}</p>
//                 <p class="card-text">${element.tipo}</p>
//                 <p class="card-text">${element.descricao}</p>
//                 <p class="card-text">${element.material}</p>
//   </div>
// </div>
            
            tbody.appendChild(linha)
        });
    } catch (error) {
        console.log(error);
    }
}

getData()

