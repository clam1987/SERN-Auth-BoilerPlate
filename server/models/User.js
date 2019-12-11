// Dependancies 
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
// Models
const Model = Sequelize.Model;

// User Model
class User extends Model{}
User.init({},
    {sequelize,
    modelName: "user",
    timestamps: true
});


module.exports = User;