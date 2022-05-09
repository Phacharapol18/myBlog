const User = require("./user1");
const Blog = require("./Blog");

User.hasMany(Blog);
Blog.belongsTo(User)


module.exports = {
    User,
    Blog
}