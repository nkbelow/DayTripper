let GoogleStrategy = require('passport-google-oauth20').Strategy;

let GoogleTokenStrategy = require('passport-google-token').Strategy;
let passport = require('passport');
let db = require('../../database-mongo/index.js');

passport.use(new GoogleStrategy({
  clientID: '898316907945-kk9tkv33a46v17qej06tfce8hmv88g44.apps.googleusercontent.com',
  clientSecret: 'SE4ddGm2SWQt8jezDRARRl7U',
  callbackURL: 'https://ss-day-tripper-staging.herokuapp.com/auth/google/callback'
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