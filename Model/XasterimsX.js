const {DataTypes} = require("sequelize");
const sequelize = require("../database/db")

const XasterimsX = sequelize.define('x_asterism_x', {
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.JSONB
    }

})
module.exports = XasterimsX