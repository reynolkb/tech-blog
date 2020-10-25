const { Post } = require('../models');

const postData = [
    {
        title: 'Run Buddy reaches 1 million subscribers',
        post_url: 'https://taskmaster.com/press',
        user_id: 1
    },
    {
        title: 'Run Buddy reaches 2 million subscribers',
        post_url: 'https://taskmaster.com/press',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
