const express = require('express');

module.exports = (
    userService,
    teamService
) => {
    const router = express.Router();

    //defining cntroller
    const userController = require('./user')(
        userService
    );
    const teamController = require('./team')(
        teamService
    );
    //defining routers
    router.use('/users', userController);
    router.use('/teams', teamController);
    return router;
}