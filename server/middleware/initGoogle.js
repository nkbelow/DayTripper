let GoogleStrategy = require('passport-google-oauth20').Strategy;
let passport = require('passport');
let db = require('../../database-mongo/index.js');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CLIENT_SECRET
},
function(accesstoken, refreshToken, profile, done) {
  // console.log('this is the accesstoken', accesstoken);
  // console.log('this is the refreshToken', refreshToken);
  // console.log('this is the profile', profile);
  let user = {
    userId: profile.id,
    token: accesstoken,
    firstname: profile.name.givenName,
    lastname: profile.name.familyName,
    email: profile.emails[0].value
  };
  console.log(user);
  db.findUser(user.userId, function(err, person) {
    if (err) {
    } else if (person.length === 0) {
      db.createUser(user, function(err, results) {
        if (err) {
          done(err, null);
        } else {
          done(null, results);
        }
      });
    }
  });
  done(null, user);

}));

passport.serializeUser(function(user, done) {
  done(null, user.userId);
});

passport.deserializeUser(function(id, done) {
  db.findUser(user.userId, function(err, user) {
    if (err) {
      done(err);
    } else {
      done(null, user);
    }
  });
});

module.exports = passport;