// Dependancies
const path = require("path");
const router = require("express").Router();
const passport = require("../config/authentication");

// Routes API for Google login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

// Routes Google callback after authentication
router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.send("<h1>Authenticated</h1>");
  }
);

// Routes API for Facebook login
// Facebook Auth Route
router.get("/auth/facebook", passport.authenticate("facebook"));

// Facebook Auth Route Callback
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    res.send("<h1>Authenticated</h1>");
  }
);

// Route to Logout
router.get("/logout", (req, res) => {
  req.logOut();
  res.send("<h1>You've Logged Out!</h1>");
});

module.exports = router;
