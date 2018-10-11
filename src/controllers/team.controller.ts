import { Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

export class TeamController {
    public getTeams (req: Request, res: Response) {
        res.json({ message: 'Team list'});
    }
}