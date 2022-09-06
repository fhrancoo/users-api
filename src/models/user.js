const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
    dialect: process.env.DBTYPE || 'mysql',
    password: process.env.DBPASSWORD,
    username: process.env.DBUSER,
    database: process.env.DBSCHEMA,
    host: process.env.DBHOST,
    port: process.env.DBPORT
})

const Users = sequelize.define('Users', {
    Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    UserName: {
        type:DataTypes.STRING,
        allowNull:false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type:DataTypes.STRING,
        allowNull:false
    },
});

module.exports = {
    sequelize,
    Users
}