var nodemailer = require("nodemailer");

// username/pass for localhost
// oauth2 for production
if (process.env.TYPE === "DEVELOPMENT") {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODE_MAIL_USER,
      pass: process.env.NODE_MAIL_PASS,
    },
  });
} else if (process.env.TYPE === "PRODUCTION") {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USER,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN,
    },
  });
}

module.exports = function (app, passport) {
  app.post("/signup", function (req, res, next) {
    passport.authenticate("local-signup", function (err, user, info, status) {
      if (err) {
        return next(err);
      } else if (!user) {
        res.send(info);
      } else {
        // send Email
        var mailOptions = {
          from: '"Money-IO" <communication.vrpacman@gmail.com>',
          to: user.email,
          subject: "Confirm registration for Money-IO",
          text: `Hi ${user.username}!\n\nPlease verify your account by clicking the following link: ${process.env.MONEY_CLIENT_URL}/verifyemail?unique=${user.token}\n\nIf you believe you have received this email in error, please ignore this email.`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          }
        });

        res.status(200).send({});
      }
    })(req, res, next);
  });
};
