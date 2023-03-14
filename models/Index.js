const User = require("./User");
const Post = require("./Post");
const Comments = require("./Comments");

User.hasMany(Post, {
    foreignKey: "user_id",
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

Comments.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

Comments.belongsTo(Post, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

User.hasMany(Comments, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

Post.hasMany(Comments, {
    foreignKey: "post_id",
});

module.exports = {User, Post, Comment};