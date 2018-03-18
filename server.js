const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');

//services


module.exports = (db, config) => {
    const app = express();
    //services
    /*const officesService = new OfficesServices(
        db.offices,
        errors
    );*/
    

    //controllers
    /*const logger = require('./global-controllers/logger')(loggerService);
    const cache = require('./global-controllers/cache')(cacheService, loggerService);
    const error = require('./global-controllers/error');
    const apiController = require('./controllers/api')(
        officesService,
        agentsServices,
        propertiesServices,
        cacheService,
        config
    );*/

    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(bodyParse.json());

    
    return app;
};
