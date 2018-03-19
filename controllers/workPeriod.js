const CrudController = require('./crud');

class WorkPeriodController extends CrudController{
    constructor(workPeriodService){
        super(workPeriodService);

        for(let route in this.routes){
            this.routes['/:teamId/users/:userId/work-periods' + route] = this.routes[route];
            delete this.routes[route];
        }

        this.registerRoutes();
    }

    async create(req, res){
        req.body.teamId = parseInt(req.params.teamId);
        req.body.userId = parseInt(req.params.userId);
        await super.create(req, res);        
    }

    async update(req, res){
        req.body.teamId = parseInt(req.params.teamId);
        req.body.userId = parseInt(req.params.userId);
        await super.update(req, res);        
    }
}

module.exports = (workPeriodService) => {
    const controller = new WorkPeriodController(workPeriodService);
    return controller.router;
}