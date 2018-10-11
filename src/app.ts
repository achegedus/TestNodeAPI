import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import * as dotenv from "dotenv";
import * as expressValidator from 'express-validator';
import * as bluebird from 'bluebird';

// Routes
import { AuthRoutes } from "./routes/auth.routes";
import { TeamRoutes } from "./routes/team.routes";

class App {
    public app: express.Application;

    public mongoURL: string = '';

    public authRoutes: AuthRoutes = new AuthRoutes();
    public teamRoutes: TeamRoutes = new TeamRoutes();

    constructor() {
        // Load environment variables from .env file, where API keys and passwords are configured
        dotenv.config({path: '.env' || '.env.example'});

        // init express
        this.app = express();
        this.config();

        // init routes
        this.authRoutes.routes(this.app);
        this.teamRoutes.routes(this.app);

        // setup mongo
        this.mongoSetup();
    }

    // config
    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(expressValidator());

        // set port
        this.app.set('port', process.env.PORT || 3000);

        this.app.set('env', process.env.ENV || 'development');
    }

    private mongoSetup(): void {
        var mongoURL = process.env.MONGOURL || 'mongodb://localhost/';
        var mongoDB = process.env.MONGODB || 'swimdb';

        (<any>mongoose.Promise) = global.Promise;
        mongoose.connect(mongoURL + mongoDB, {useNewUrlParser: true});
    }
}

export default new App().app;