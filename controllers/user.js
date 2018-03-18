const CrudController = require('./crud');

class UserController extends CrudController {
    constructor(userService) {
        super(userService);

        this.registerRoutes();
    }
}

module.exports = (agentService) => {
    const controller = new UserController(agentService);
    return controller.router;
}