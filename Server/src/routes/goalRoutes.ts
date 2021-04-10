import { Router } from 'express';
import { GoalController } from '../controllers/goalController';
import { AuthController } from '../controllers/authController';


export class GoalRoutes {

    public router: Router;
    public goalController: GoalController = new GoalController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/:id', this.authController.authenticateJWT, this.goalController.getGoals);
        this.router.get('/:id/:goalId', this.authController.authenticateJWT, this.goalController.getGoaltWithId);
        this.router.post('/:id', this.authController.authenticateJWT, this.goalController.createGoal);
        this.router.put('/:id/:goalId', this.authController.authenticateJWT, this.goalController.updateGoal);
        this.router.delete('/:id/:goalId', this.authController.authenticateJWT, this.goalController.deleteGoal);
    }
}
