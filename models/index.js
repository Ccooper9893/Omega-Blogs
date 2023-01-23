const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//Associations
Blog.belongsTo(User, {
});

Blog.hasMany(Comment, {
});

User.hasMany(Blog, {
});

// User.hasMany(Comment, {
// });

Comment.belongsTo(User, {
});


module.exports = {
    User,
    Blog,
    Comment,
};