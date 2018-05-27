const passport = require('passport');

module.exports = (data) => {
    const login = (req, res, next) => {
        const auth = passport.authenticate('local', (error, user) => {
            if (error) {
                next(error);
                return;
            }

            req.login(user, (e) => {
                if (e) {
                    next(e);
                    return;
                }

                res.redirect(`/dashboard/${req.user._id}`);
            });
        });

        auth(req, res, next);
    };

    return {
        login
    }
}