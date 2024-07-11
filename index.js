const sequelize = require('./database/db')
const RickAndMortyService = require('./services/RickAndMortyService')

sequelize.authenticate()
const service = RickAndMortyService.uploadData().then(r =>{

})
