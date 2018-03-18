const express = require('express');
const wrap = require('../helpers/wrap');

class CrudController{
    constructor(service){
        this.service = service;

        this.readAll = this.readAll.bind(this);
        this.read = this.read.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

        this.router = express.Router();
        this.routes = {
            '/': [{method: 'get', cb: this.readAll}],
            '/:id': [{method: 'get', cb: this.read}],
            '/': [{method: 'post', cb: this.create}],
            '/': [{method: 'put', cb: this.update}],
            '/': [{method: 'delete', cb: this.delete}]
        }
    }
}

module.exports = CrudController;