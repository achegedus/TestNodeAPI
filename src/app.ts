import * as express from "express";
import * as expressValidator from 'express-validator';
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";

// Routes
import { AuthRoutes } from "./routes/auth.routes";

class App {
    public app: express.Application;
    public authRoutes: AuthRoutes = new AuthRoutes();

    constructor() {
        // Load environment variables from .env file, where API keys and passwords are configured
        dotenv.config({path: '.env' || '.env.example'});

        this.app = express();
        this.config();

        this.authRoutes.routes(this.app);
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
}

export default new App().app;