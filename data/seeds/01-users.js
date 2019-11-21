const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").insert([
    { username: "admin", password: bcrypt.hashSync("password", 10) },
    { username: "usertwo", password: bcrypt.hashSync("password", 10) }
  ]);
};

const joeView = view => {
  const myView = knex.from("table 1").join("table 2", table => {
    this.on({ "table 2.property": "table 1.property" });
  });
  return knex.schema.raw(
    `CREATE OR REPLACE VIEW ?? AS (${myView}) [joeLambert]`
  );
};
