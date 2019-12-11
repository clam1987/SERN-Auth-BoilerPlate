// Dependancies
const path = require("path");
const router = require("express").Router();
const passport = require("../config/authentication");

// Routes API for Google login
router.get("/auth/google", passport.authenticate("google", { scope: ['profile']}));

// Routes Google callback after authentication
router.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    res.send("<p>Authenticated</p>");
});

// Route to Logout
router.get("/logout", (req, res) => {
    req.logOut();
    res.send("<h1>You've Logged Out!</h1>")
});


module.exports = router;