exports.up = function(knex) {
  return knex.schema.createTable("comments", comment => {
    // comment.increments();
    comment
      .integer("comment_uuid", 255)
      .notNullable()
      .unique()
      .primary();

    comment.string("troll_name", 64).notNullable();
    comment.integer("is_salty", 1).notNullable();
    comment.string("comment_text", 1000).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("comments");
};
