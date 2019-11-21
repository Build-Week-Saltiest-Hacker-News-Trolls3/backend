const router = require("express").Router();
const bcrypt = require("bcryptjs");

const getJwt = require("./auth-helpers");

const Users = require("../users/users-model");
const checkAuthenticationToken = require("../users/users-helpers");
const checkIfUserExists = require("../users/users-validation");

router.get("/", (req, res) => {
  res.status(200).json({ auth: "up" });
});

router.post("/register", checkIfUserExists, (req, res) => {
  const user = req.body;
  const result = checkAuthenticationToken(user);

  if (result.success) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    Users.add(user)
      .then(user => {
        const { id, username } = user;
        res.status(200).json({ id, username });
      })
      .catch(() => {
        res.status(500).json({ error: "Server Error" });
      });
  } else {
    res.status(400).json({
      message: "There was a problem validating your user",
      error: result.errors
    });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwt(user.id);
        res.status(200).json({
          id: user.id,
          message: "Login Successful",
          payload: token
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(() => {
      res.status(500).json({ message: "Server error" });
    });
});

module.exports = router;
