function parimpar() {
    let num = Number(window.prompt('Digite um número:'));

    if(num >0){
        if (num % 2 == 0) {
            let res = window.document.getElementById('res');
            res.innerHTML = `O número ${num} é par!`;
        }
    
        else {
            let res = window.document.getElementById('res')
            res.innerHTML = `O número ${num} é impar` 
        }
    } else{
        window.alert('O valor não pode ser Undefined')
    }

}
