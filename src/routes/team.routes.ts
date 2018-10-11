import { Router } from 'express';
import { TeamController } from '../controllers/team.controller';

export class TeamRoutes {
    public teamController: TeamController = new TeamController();

    public routes(app): void {
        app.route('/teams').get(this.teamController.getTeams);
    }
}