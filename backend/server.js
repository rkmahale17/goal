"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var commonRoutes_1 = require("./routes/commonRoutes");
var mongoose = require("mongoose");
var path = require("path");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.routePrv = new commonRoutes_1.Routes();
        // public mongoUrl: string = 'mongodb://localhost/CRMdb';
        this.mongoUrl = "mongodb://admin_rahul:Mpk72&rkm@ds161312.mlab.com:61312/heroku_715np8qn";
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        var distDir = path.join(__dirname + "/../dist/");
        this.app.use(express.static(distDir));
    };
    App.prototype.mongoSetup = function () {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    };
    return App;
}());
exports["default"] = new App().app;
