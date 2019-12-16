// Dependancies 
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
// Models
const Model = Sequelize.Model;

// User Model
class Facebook extends Model{}
Facebook.init({
    facebookId: {
        type: Sequelize.STRING,
    },
    displayName: {
        type: Sequelize.STRING,
    },
},
    {sequelize,
    modelName: "facebook",
    timestamps: true
});

module.exports = Facebook;