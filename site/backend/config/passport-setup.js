const passport = require("passport");
var DiscordStrategy = require("passport-discord").Strategy;
const { clientID, clientSecret } = require("../../../config.json");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.use(
    new DiscordStrategy({
        clientID: '974557782546206720',
        clientSecret: 'iW-YLAI8FYklrr_8vpqsa-j8cN4T8Zdq',
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: ["bot", "identify"]
    },
    async (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    }
))