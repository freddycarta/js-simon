console.log('attento a cosa scrivi')

const delay = 3 * 1000;

// generare un array di 5 num casuali
const numeri = creaArrayDiNumeriUnici(5, 1, 100)
console.log(numeri)

// mostare numeri all utente
alert(`Memorizza questi numeri: ${numeri.join(', ')}`)

// dopo 30 sec chiediamo all utente di inssreire 5 num
setTimeout (() => {
   console.log('chiediamo numeri all utente') 
}, delay)


// diciamo all uetnte quali numeri ha azzeccato


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