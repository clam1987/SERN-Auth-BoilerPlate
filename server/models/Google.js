// Dependancies 
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
// Models
const Model = Sequelize.Model;

// User Model
class Google extends Model{}
Google.init({
    googleId: {
        type: Sequelize.STRING,
    },
    displayName: {
        type: Sequelize.STRING,
    },
},
    {sequelize,
    modelName: "google",
    timestamps: true
});


// To Sync Server
// User.sync({ force: true }).then(() => {
//     return User.create({
//     })
// });


module.exports = Google;