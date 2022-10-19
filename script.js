console.log('attento a cosa scrivi')




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