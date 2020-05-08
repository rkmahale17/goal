"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes");
const mongoose = require("mongoose");
const path = require("path");
class App {
    constructor() {
        this.app = express();
        this.routePrv = new crmRoutes_1.Routes();
        // public mongoUrl: string = 'mongodb://localhost/CRMdb';
        this.mongoUrl = "mongodb://admin_rahul:Mpk72&rkm@ds161312.mlab.com:61312/heroku_715np8qn";
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        let distDir = path.join(__dirname + "/../public");
        console.log(distDir);
        this.app.use(express.static(distDir));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map