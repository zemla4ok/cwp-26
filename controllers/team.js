const CrudController = require('./crud');

class TeamController extends CrudController {
    constructor(teamService) {
        super(teamService);

        this.registerRoutes();
    }
}

module.exports = (teamService) => {
    const controller = new TeamController(teamService);
    return controller.router;
}