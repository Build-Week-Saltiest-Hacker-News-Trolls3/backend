const db = require("../data/db-config");

const find = () => {
  return db("trolls")
    .select("*")
    .orderBy("salty_rank", "asc");
};

const findAllComments = () => {
  return db("comments")
    .select("*")
    .orderBy("id", "asc")
    .where({ is_salty: 1 });
};

const findBy = filter => {
  return db("trolls").where(filter);
};

const findComment = filter => {
  return db("comments").where(filter);
};

const addCommentFromDsApi = async comment => {
  const [comment_uuid] = await db("comments").insert(comment, "comment_uuid");
  return findBy(comment_uuid);
};

module.exports = {
  find,
  findBy,
  findComment,
  addCommentFromDsApi,
  findAllComments
};
