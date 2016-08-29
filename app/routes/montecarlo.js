/**
 * Created by Michael on 8/23/2016.
 */
"use strict";

/**
 * Module dependencies.
 */

var users = require('../../app/controllers/users'),
    simulation = require('../../app/controllers/montecarlo');

module.exports = function(app) {
    console.log("montecarlo route");
// demo Routes
    app.route('/demo')  //corresponds with resource?
        .post(simulation.runlocal);
    //.post(users.requiresLogin, simulation.create);
    app.route('/montecarlo')
        .get(simulation.show);
        //.post(users.requiresLogin, simulation.create);
    app.route('/run')
        .get(simulation.runlocal);
    app.route('/montecarlo/:simID')
        .get(simulation.show);
        //.put(users.requiresLogin, articles.hasAuthorization, articles.update)
        //.delete(users.requiresLogin, articles.hasAuthorization, articles.destroy);

// Finish with setting up the articleId param
// Note: the articles.article function will be called everytime then it will call the next function.
    //app.param('simulationID', simulation.simID);
};

