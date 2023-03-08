const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const PlateUser = require('../models/plateUser')



passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
  PlateUser.findOne({ 'googleId': profile.id }, function(err, plateUser) {
    if (err) return cb(err);
    if (plateUser) {
      return cb(null, plateUser);
    } else {
      var newUser = new PlateUser({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id
      });
      newUser.save(function(err) {
        if (err) return cb(err);
        return cb(null, newUser);
      });
    }
  });
}
));


passport.serializeUser(function(plateUser, done) {
  done(null, plateUser.id);
})

passport.deserializeUser(function(id, done) {
  PlateUser.findById(id, function(err, plateUser) {
    done(err, plateUser);
  });
});