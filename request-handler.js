var request = require('request');
var Users = require('./app/collections/users');
var User = require('./app/models/user');
var Spendings = require('./app/collections/transactions');
var Spending = require('./app/models/transaction');
var Debts = require('./app/collections/debts');
var Debt = require('./app/models/debt');

exports.currency = function(req, res) {
  request.get({url: 'http://api.fixer.io/latest?base=USD'}, function(error, response, body) { 
    if (!error) { 
      res.send(JSON.parse(body));
    } else {
      console.log('error');
    }
  }); 
};

exports.signin = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  new User({username: username }).fetch().then(function(user) {
    if (!user) {
      console.log('invalid username');
      res.redirect('/signin');
    } else {
      if (user.attributes.password === password) {
        req.session.regenerate(function() {
          req.session.user = user;
          res.redirect('/');
          console.log('successful log in');
          // new Spendings({user.attributes.});
        });
      } else {
        console.log('incorrect password');
        res.redirect('/signin');
      }
    }
  });
};

exports.signup = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  new User({username: username}).fetch().then(function(found) {
    if (found) {
      res.send('sorry, username taken');
    } else {
      Users.create({
        username: username,
        password: password
      }).then(function(newUser) {
        req.session.regenerate(function() {
          req.session.user = newUser;
          res.redirect('/');
        });
      });
    }
  });
};

exports.check = function(req, res, next) {
  if (!req.session.user && (req.originalUrl !== '/signup/')) {
    res.redirect('/signin');
  } else {
    next();
  }
};

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/signin');
    console.log('logout');
  });
};

exports.transactions = function(req, res) {
  var category = req.body.category;
  var title = req.body.title;
  var amount = req.body.amount;
  var userID = req.session.user.id;
  Spendings.create({category: category, title: title, amount: amount, user_id: userID})
  .then(function() {
    res.send('done');
  });
};

exports.debts = function(req, res) {
  var type = req.body.type;
  var person = req.body.person;
  var amount = req.body.amount;
  var userID = req.session.user.id;
  var personID;
  new User({username: person}).fetch().then(function(user) {
    if (!user) {
      res.status(404).send('Person not found');
    } else {
      personID = user.attributes.id;
    }
  }).then(function(user) {
    Debts.create({type: type, amount: amount, person: personID, user_id: userID})
      .then(function() {
        res.send('Done');
      });
  });
};