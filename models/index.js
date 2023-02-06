const User = require('../models/User.js');
const Blog = require('../models/Blog.js');
const Comment = require('../models/Comment.js');

//Associations
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' //If User is deleted, delete user's comments?
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',  
});

module.exports = {
    User,
    Blog,
    Comment,
};