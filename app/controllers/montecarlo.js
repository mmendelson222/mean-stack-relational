/**
 * Created by Michael on 8/23/2016.
 */
/**
 * Module dependencies.
 */
'use strict';
var StandardError = require('standard-error');

//add s3 inf here.

/**
 * Find article by id
 * Note: based on article, but we'll use a key to get this from s3 (maybe)
 * Its purpose is to preload the article on the req object then call the next function.s
 */
exports.simulation = function (req, res, next, simID) {
    //return next();
};

/**
 * Create a simulation
 */
exports.create = function (req, res) {
    // augment the article by adding the UserId
    req.body.UserId = req.user.id;
    //save to s3
};

/**
 * Update a simulation
 */
exports.update = function (req, res) {

};

/**
 * Delete an simulation
 */
exports.destroy = function (req, res) {

};

/**
 * Load (or show) a simulation
 */
exports.show = function (req, res) {
    console.log("montecarlo show");

    var config = {
        AppID: "gago",
        AccountingPeriod: "201512",
        LoanProfile: "path",
        NumberOfLoansPerTask: 5000,
        ProfileHeader: "another path",
        EconomyEnvironmentFilename: "yet another path"
    };


    // Sending down the article that was just preloaded by the articles.article function
    // and saves article on the req object.
    return res.jsonp(config);
};

/**
 * List of Simulations
 */
exports.all = function (req, res) {
    //unimplemented
    return res.render('error', {
        error: "unimplemented",
        status: 500
    });
};

/**
 * Article authorizations routing middleware
 */
exports.hasAuthorization = function (req, res, next) {
    if (req.article.User.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};
