const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: 'kyle',
        email: 'kyle@gmail.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;