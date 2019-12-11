// Dependancies 
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
// Models
const Model = Sequelize.Model;

// User Model
class User extends Model{}
User.init({
    googleId: {
        type: Sequelize.STRING,
    },
    displayName: {
        type: Sequelize.STRING,
    },
},
    {sequelize,
    modelName: "user",
    timestamps: true
});

User.sync({ force: true }).then(() => {
    return User.create({
    })
});


module.exports = User;