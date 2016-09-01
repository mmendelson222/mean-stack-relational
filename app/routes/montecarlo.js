/**
 * Created by Michael on 8/23/2016.
 */
"use strict";

/**
 * Module dependencies.
 */

var users = require('../../app/controllers/users'),
    montecarlo = require('../../app/controllers/montecarlo');

module.exports = function(app) {
// demo Routes
    app.route('/demo')  //corresponds with resource?
        .post(montecarlo.runlocal);

    app.route('/montecarlo')
        .post(montecarlo.runsimulationAsync);

    app.route('/run')
        .get(montecarlo.runlocal);

    app.route('/montecarlo/:simID')
        .get(montecarlo.show);
        //.put(users.requiresLogin, articles.hasAuthorization, articles.update)
        //.delete(users.requiresLogin, articles.hasAuthorization, articles.destroy);

// Finish with setting up the articleId param
// Note: the articles.article function will be called everytime then it will call the next function.
    //app.param('simulationID', simulation.simID);
};

