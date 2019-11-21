exports.up = function(knex) {
  return knex.schema.createTable("user_comments", table => {
    table.increments();
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .integer("comment_id")
      .unsigned()
      .references("comment_uuid")
      .inTable("comments")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user_comments");
};
