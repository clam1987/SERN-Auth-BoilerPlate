// Modules
const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");
const passport = require("./config/authentication");
const apiRoutes = require("./routes/apiRoutes");

// Global Variables
const PORT = process.env.PORT || 3001;

// Initalize express
const app = express();

// Initalize dotenv
dotenv.config();

// Database Config
const db = require("./config/connection");

// cookieSession Middlewear
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [process.env.keys]
}))


// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/api", apiRoutes);


// Connection to server
app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
});

