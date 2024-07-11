const{Sequelize}= require("sequelize");
const path = require('path')
const {readFileSync} = require('fs')

const sequelize = new Sequelize('postgres://candidate:62I8anq3cFq5GYh2u4Lh@rc1b-r21uoagjy1t7k77h.mdb.yandexcloud.net:6432/db1',
    {
        dialect: 'postgres',
        dialectOptions:{
            ssl:{
                rejectUnauthorized: true,
                ca: readFileSync(path.join(process.cwd(), "../","../","ssl", "CA.pem")).toString()
            }

        }

    })


module.exports = sequelize