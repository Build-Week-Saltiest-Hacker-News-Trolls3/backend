module.exports = user => {
  const errors = [];
  if (!user.username || user.username.length < 4) {
    errors.push("Username must be at least 4 characters");
  }
  if (!user.password || user.password.length < 4) {
    errors.push("Password must be at least 4 characters");
  }

  return {
    success: errors.length ? false : true,
    errors
  };
};
