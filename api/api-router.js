const router = require("express").Router();

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const authenticate = require("../auth/auth-middleware");
const trollsRouter = require("../trolls/trolls-router");

router.use("/trolls", authenticate, trollsRouter);
router.use("/auth", authRouter);
router.use("/users", authenticate, usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "Server is running" });
});

module.exports = router;
