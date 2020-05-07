import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/commonRoutes";
import * as mongoose from "mongoose";
import * as path from 'path';

class App {
  public app: express.Application = express();
  public routePrv: Routes = new Routes();
  // public mongoUrl: string = 'mongodb://localhost/CRMdb';
  public mongoUrl: string =
    "mongodb://admin_rahul:Mpk72&rkm@ds161312.mlab.com:61312/heroku_715np8qn";

  constructor() {
    this.config();
    this.mongoSetup();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // serving static files
    var distDir = path.join(__dirname + "../dist/");
    console.log(distDir);
    this.app.use(express.static(distDir));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
  }
}

export default new App().app;
