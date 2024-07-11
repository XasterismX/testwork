const XasterismX = require('../Model/XasterimsX')
const axios = require('axios')

class RickAndMortyService {
    constructor() {
    }
    async uploadData() {
        try {
        const {results} = await axios.get("https://rickandmortyapi.com/api/character")
            console.log()
        for (const resultKey in results) {
            const person = await XasterismX.create({
                name: results[resultKey].name,
                data:{...results[resultKey]}
            })
            console.log(person)
        }
        return true
        }catch (e) {
            return  e
        }
    }
}

module.exports = new RickAndMortyService()