const { User } = require('../models');

const userData = [
    {
        username: 'lernatino',
        email: 'lernatino@gmail.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;