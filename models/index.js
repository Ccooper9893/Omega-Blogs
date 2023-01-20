const User = require('./User');
const Blog = require('./Blog');

//Associations
//Blog belongs to User
Blog.belongsTo(User);

//User has many blogs
User.hasMany(Blog);

module.exports = {
    User,
    Blog
};