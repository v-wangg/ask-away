const passport = require('passport');

module.exports = app => {
    app.get(
        '/api/auth/google/login', 
        passport.authenticate("google", {
            scope: ["profile, email"]
        })
    );
}