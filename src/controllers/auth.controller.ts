import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as util from 'util';
import * as crypto from 'crypto';
import { User } from '../models/user.model';
import { resolvePtr } from 'dns';

export class AuthController {
    async login(req: Request, res: Response) {
        req.assert('email', 'Email is not valid').isEmail();
        req.assert('password', 'Password cannot be blank').notEmpty();
        req.sanitize('email').normalizeEmail({gmail_remove_dots: false});

        const errors = req.validationErrors();

        if (errors) {
            return res.status(401).send({
                message: errors,
                code: 406
            });
        }

        // request is good
        try {
            
        } catch (error) {
            return res.status(400).send({
                message: error,
                code: 400
            })
        }
    }

    async register(req: Request, res: Response, next: NextFunction) {
        req.assert('password', 'Password cannot be blank').notEmpty();
        req.assert('fname', 'First name must be specified').notEmpty();
        req.assert('lname', 'Last name must be specified').notEmpty();
        req.assert('username', 'Username must be specified').notEmpty();
        req.assert('role', 'Role must be specified').notEmpty();

        req.assert('email', 'Email is not valid').isEmail();
        req.sanitize('email').normalizeEmail({gmail_remove_dots: false});

        const errors = req.validationErrors();

        if (errors) {
            return res.status(401).send({
                message: errors,
                status: 401
            });
        }
    }

    async activate(req: Request, res: Response) {
        throw new Error("Not implemented");
    }
}