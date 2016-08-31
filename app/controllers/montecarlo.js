/**
 * Created by Michael on 8/23/2016.
 */
/**
 * Module dependencies.
 */
'use strict';
var StandardError = require('standard-error'),
    exec = require('child_process').exec;

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
    console.log("show some json output");

    var config = {
        AppID: "gago",
        AccountingPeriod: "201512",
        LoanProfile: "path",
        NumberOfLoansPerTask: 5000,
        ProfileHeader: "another path",
        EconomyEnvironmentFilename: "yet another path"
    };

    return res.jsonp(config);
};

var demoScriptPath = "test/reverse.sh ";
exports.runlocal = function (req, res){
    console.log("executing " + demoScriptPath);
    //enclose in quotes - single parameter expected.
    exec(demoScriptPath + "\"" + req.body.content +  "\"",
        function (error, stdout, stderr) {
            if (stdout) {
                console.log('stdout: ' + stdout);
                return  res.jsonp(JSON.parse(stdout)); //output is expected to be json
            }
            if (stderr) {
                console.log('stderr: ' + stderr);
            }
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            var errjson = '{ "error": ' +JSON.stringify(error)+'}';
            return res.jsonp(JSON.parse(errjson)) ;
        });
    return 'ok';
};

var simScriptPath = "/home/ec2-user/bin/runbook_svc.sh ";
exports.runsimulation = function (req, res){
    //multiple parameters may be included in content field.
    exec(simScriptPath + req.body.content,
        function (error, stdout, stderr) {
            var sjson;
            if (stdout) {
                console.log('stdout: ' + stdout);
                sjson = '{ "stdout": ' +JSON.stringify(stdout)+'}';
            }
            if (stderr) {
                console.log('stderr: ' + stderr);
                sjson = '{ "stderr": ' +JSON.stringify(stderr)+'}';
            }
            if (error !== null) {
                console.log('exec error: ' + error);
                sjson = '{ "error_exec": ' + JSON.stringify(error) + '}';
            }
            return res.jsonp(JSON.parse(sjson)) ;
        });
    return 'ok';
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
