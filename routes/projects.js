var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();

function getProjects() {
    return projects;
}

module.exports =  { router, getProjects };