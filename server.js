const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');

//services
const UserService = require('./services/user');
const TeamService = require('./services/team');

module.exports = (db, config) => {
    const app = express();
    //services
    const userService = new UserService(
        db.users
    );
    const teamService = new TeamService(
        db.teams, db.users
    );   

    //controllers
    const apiController = require('./controllers/api')(
        userService,
        teamService
    );

    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(bodyParse.json());

    app.use('/api', apiController);

    return app;
};
