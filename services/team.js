const CrudService = require('./crud');

class TeamService extends CrudService{
    constructor(repository){
        super(repository);
    }
}

module.exports = TeamService;