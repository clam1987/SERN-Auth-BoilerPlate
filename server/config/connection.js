// Node Packages
const Sequelize = require("sequelize");


// Create sequelize connection
const sequelize = new Sequelize("testdb", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
});

// Check to see if Databse is connected correctly
sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
}).catch(err => {
    console.error("Unable to connect to the database:", err);
});


module.exports = sequelize;