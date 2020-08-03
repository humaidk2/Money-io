module.exports = function (app, isLoggedIn, Transaction) {
  app.post("/transactions", isLoggedIn, function (req, res) {
    var category = req.body.category;
    var title = req.body.title;
    var amount = req.body.amount;
    var currDate = req.body.date;
    Transaction.create({
      category: category,
      title: title,
      amount: amount,
      date: currDate,
      user_id: req.session.passport.user.id,
    }).then(function (result) {
      result.isLoggedIn = req.isLoggedIn;
      res.send(result);
    });
  });
};
