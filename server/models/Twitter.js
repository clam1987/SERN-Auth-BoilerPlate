// Dependancies 
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
// Models
const Model = Sequelize.Model;

// User Model
class Twitter extends Model{}
Twitter.init({
    twitterId: {
        type: Sequelize.STRING,
    },
    displayName: {
        type: Sequelize.STRING,
    },
},
    {sequelize,
    modelName: "twitter",
    timestamps: true
});

module.exports = Twitter;

