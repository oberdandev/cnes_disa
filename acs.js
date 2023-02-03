const acs = require('./acs.json')

const agrupado = acs.reduce(function(acc, acs) {

    if(!acc[acs.EAS]) {
        acc[acs.EAS] = []
    }
    acc[acs.EAS].push(acs)
    return acc
}, {})

console.log(agrupado['USF AJURICABA'])

Object.keys(agrupado).map(function(key){
    const tamanho = agrupado[key].length
    console.log(key + ":", tamanho)
})


