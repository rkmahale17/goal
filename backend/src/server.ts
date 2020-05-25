import * as express from 'express';
import * as mongoose from 'mongoose';

import * as compression from 'compression';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import { MONGODB_URI } from './util/secrets';

import { UserRoutes } from './routes/userRoutes';
import { GoalRoutes } from './routes/goalRoutes';
import { PhaseRoutes } from './routes/phaseRoutes'


class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.mongo();
  }

  public routes(): void {
    this.app.use('/api/user', new UserRoutes().router);
    this.app.use('/api/goal', new GoalRoutes().router);
    this.app.use('/api/phase', new PhaseRoutes().router);
  }

  public config(): void {
    this.app.set('port', process.env.PORT || 8080);
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    const distDir = path.join(__dirname + '/../public');
    this.app.use(express.static(distDir));
    this.app.use(compression());
    this.app.use(cors());
  }

  private mongo() {
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('Mongo Connection Established');
    });
    connection.on('reconnected', () => {
      console.log('Mongo Connection Reestablished');
    });
    connection.on('disconnected', () => {
      console.log('Mongo Connection Disconnected');
      console.log('Trying to reconnect to Mongo ...');
      setTimeout(() => {
        mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true, useUnifiedTopology: true
        });
      }, 3000);
    });
    connection.on('close', () => {
      console.log('Mongo Connection Closed');
    });
    connection.on('error', (error: Error) => {
      console.log('Mongo Connection ERROR: ' + error);
    });

    const run = async () => {
      await mongoose.connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true, useUnifiedTopology: true,
        useFindAndModify: false
      });
    };
    run().catch(error => console.error(error));
  }


  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(
        '  API is running at http://localhost:%d',
        this.app.get('port')
      );
    });
  }

}

const server = new Server();

server.start();
