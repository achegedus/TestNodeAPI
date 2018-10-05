import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

export class AuthRoutes {
    public authController: AuthController = new AuthController();

    public routes(app): void {
        app.route('/login').post(this.authController.login);
        app.route('/register').post(this.authController.register);
        app.route('/activate/:activationToken').post(this.authController.activate);
    }
}