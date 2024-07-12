// let key = 'item-1'
// localStorage.setItem('key', 'value')

// let myItem = localStorage.getItem(key)
// console.log(myItem)   

// localStorage.setItem(key, 'new');

// localStorage.removeItem(key);
// localStorage.clear()

// Criar item:
let myObj = { name: 'Gabriel', age: 25 }; 
console.log(typeof(JSON.stringify(myObj)))
localStorage.setItem('key',JSON.stringify(myObj));

// https://warcontent.com/localstorage-javascript/
// Ler item:
// let myItem = JSON.parse(localStorage.getItem(key));