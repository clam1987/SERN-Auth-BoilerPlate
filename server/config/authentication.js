// Dependancies
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const dotenv = require("dotenv");
const Google = require("../models/Google");
const Facebook = require("../models/Facebook");
const Twitter = require("../models/Twitter");
const MyOwn = require("../models/MyOwn")

// Initialize DOTENV
dotenv.config();

// Passport Initialize with Google's Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CONSUMER_KEY,
      clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
      callbackURL: "http://localhost:3001/api/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      Google.findOrCreate({
        where: { googleId: profile.id, displayName: profile.displayName }
      }).then((err, user) => {
        return done(err, user, profile);
      });
    }
  )
);

// Passport Initialize with Facebook's Strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_ID,
  clientSecret: process.env.FACEBOOK_SECRET,
  callbackURL: "http://localhost:3001/api/auth/facebook/callback"
},
(accessToken, refreshToken, profile, done) => {
  Facebook.findOrCreate({
    where: { facebookId: profile.id, displayName: profile.displayName }
  }).then((err, user) => {
    return done(err, user, accessToken, profile);
  })
}
));

// Passport Serialize User for Sessions -- Login
passport.serializeUser((user, done) => {
  done(null, user);
});

// Passport Deserialize User for Sessions -- Logout
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(null, user);
  });
});

module.exports = passport;
