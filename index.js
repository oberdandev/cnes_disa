const fs = require('fs')

async function acsCNES() {
  const data = fs.readFile('./acs.json', 'utf-8', async (err, jsonString)=> {
        if(err)
        {
            return console.log('file read error:', err)
        }
        return JSON.stringify(jsonString)
    })
    const acsArray = JSON.parse(data)        
    return acsArray
}

console.log(acsCNES())





