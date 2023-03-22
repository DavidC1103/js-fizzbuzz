
const container = document.querySelector('.container');
console.log(container);
//creamo un variabile aggiungendo il valore
let value = "";

// creare il circuito
for (let i = 1; i <= 100; i++) {
// diamo il valore(del circuito) alla variabile    
    value = i;
// ad ogni giro del circuito creiamo un dic    
    const box = document.createElement('div')
// aggiugniamo la classe creata in css alla const
    box.classList.add('box')    
// tutti i multipli di 3    
    if (!(i % 3)) {
        value = 'Fizz';
        box.classList.add('red')
    }
    // tutti i multipli di 5
    if (!(i % 5)) {
        value = 'Buzz';
        box.classList.add('blue')
    }
    // tutti i multipli di 3 e 5    
    if (!(i % 3) && !(i % 5)) {
        console.log(i)
        value = 'FizzBuzz';
        box.classList.add('green')
        box.classList.remove('blue')
    }
//aggiungiamo le box al DOM
container.append(box)
//aggiungiamo all'interno delle box il valore dell i
box.append(value)
}