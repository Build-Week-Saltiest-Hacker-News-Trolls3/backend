exports.up = function(knex) {
  return knex.schema.createTable("trolls", troll => {
    troll.increments();
    troll.string("name", 100).notNullable();
    troll
      .integer("date_created", 255)
      .unsigned()
      .notNullable();
    troll.float("salty_rank", 64).notNullable();
    troll.integer("salty_comments", 255).notNullable();
    troll.integer("comments_total", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trolls");
};
