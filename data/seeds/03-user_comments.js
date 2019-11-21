exports.seed = function(knex) {
  return knex("user_comments").insert([
    { user_id: 1, comment_id: 342184384 }
    // { user_id: 1, comment_id: 2 },
    // { user_id: 2, comment_id: 3 },
    // { user_id: 2, comment_id: 1 }
  ]);
};
