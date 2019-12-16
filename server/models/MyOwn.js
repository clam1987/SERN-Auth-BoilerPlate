// Dependancies 
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
// Models
const Model = Sequelize.Model;

// User Model
class MyOwn extends Model{}
MyOwn.init({
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
},
    {sequelize,
    modelName: "myown",
    timestamps: true
});

module.exports = MyOwn;

