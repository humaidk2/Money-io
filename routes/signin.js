module.exports = function(app, passport) {
    app.post('/signin', function(req, res, next){
        passport.authenticate('local-login', function(err, user, info) {
            if (!user) {
              console.log('hit !user')
              res.send(info);
            } else {
              req.logIn(user, function() {
                return res.redirect('/')
              })
            }
        })(req, res, next)
    })
}
