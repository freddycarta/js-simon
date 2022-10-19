console.log('attento a cosa scrivi')

const delay = 2 * 1000;
const numeriUtente = []
const numeriIndovinati = []

// generare un array di 5 num casuali
const numeri = creaArrayDiNumeriUnici(5, 1, 100)
console.log(numeri)

// mostare numeri all utente
alert(`Memorizza questi numeri: ${numeri}`)

// dopo 30 sec chiediamo all utente di inssreire 5 num
setTimeout (() => {
   console.log('chiediamo numeri all utente') 

   for (let i = 0; i < numeri.length; i++) {
        const n = parseInt(prompt('inserisici i numeri che ti ricordi'))
        numeriUtente.push(n)

        if (numeri.includes(n)) {
            numeriIndovinati.push(n)
        }
   }
//    console.log(numeri, numeriUtente, numeriIndovinati)
   // diciamo all utente quali numeri ha azzeccato
        alert(
            `hai indovinato i numeri: ${numeriIndovinati}` 
            )
}, delay)







function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function creaArrayDiNumeriUnici(length,min,max) {
    // creo array di 5 num
    const elements = []
    // ciclo elements
    while (elements.length < length) {
        // geneero num da 1 a max
        const n = getRandomIntInclusive(min,max)
        // se num non è nell'array
        if(!elements.includes(n)) {
            elements.push(n)
        }
        // allora pusho 
         
    }

    return elements
}