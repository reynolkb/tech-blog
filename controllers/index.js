const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

// router.use('/api/users', apiRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    console.log('no routes hit');
    res.status(404).end();
});

module.exports = router;