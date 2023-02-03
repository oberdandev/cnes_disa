const smallWord = (str) => {
    if(!str) return null

    str = String(str)
    const arr = str.trim().split(" ")
    let smallestWord = arr[0]

    for(i = 1; i < arr.length; i++) {
        if(smallestWord.length > arr[i].length){
            smallestWord = arr[i]
        }
    }
   return smallestWord
}

const smWord = (str) => {
    
    if(!str) return null

    str = String(str)
    const arr = str.trim().split(" ")
    console.log(arr)

    return arr.reduce((acumulator, actualWord)=> {
        if(actualWord.length < acumulator.length){
           return actualWord
        }
        return acumulator
    })
    
}




console.log(smWord('dois tres quatro cinco palavras noventa um'))