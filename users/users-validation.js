const db = require("../data/db-config");

const findByName = username => {
  return db("users")
    .where({ username })
    .first();
};

module.exports = (req, res, next) => {
  const incomingUsername = req.body.username;
  findByName(incomingUsername).then(user => {
    if (user === undefined) {
      next();
    } else {
      res.status(400).json({ error: "User exists" });
    }
  });
};
