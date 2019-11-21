const db = require("../data/db-config");

const find = () => {
  return db("users")
    .select("id", "username")
    .orderBy("id", "asc");
};

const findBy = filter => {
  return db("users").where(filter);
};

const findById = id => {
  return db("users")
    .where({ id })
    .first();
};

const findCommentById = id => {
  return db("comments")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
};

const findFavorites = id => {
  return db
    .select(
      "u.id",
      "u.username",
      "uc.comment_id as troll_comment_id",
      "c.comment_uuid as troll_comment_uuid",
      "c.troll_name as troll_username",
      "c.comment_text as troll_comment"
    )
    .from("user_comments as uc")
    .join("comments as c", "uc.comment_id", "c.comment_uuid")
    .join("users as u", "uc.user_id", "u.id")
    .where({ "u.id": id });
};

const removeFavorite = (id, comment_id) => {
  return db("user_comments")
    .del()
    .where({
      user_id: id,
      comment_id: comment_id
    });
};

const addFavorite = (id, comment_id) => {
  return db("user_comments").insert({ user_id: id, comment_id: comment_id });
};

const findFavoriteById = (id, comment_id) => {
  const findFavorite = db("user_comments")
    .first()
    .where({ id });

  return findFavorite;
};

module.exports = {
  find,
  findBy,
  findById,
  add,
  findFavorites,
  removeFavorite,
  addFavorite,
  findFavoriteById,
  findCommentById
};
