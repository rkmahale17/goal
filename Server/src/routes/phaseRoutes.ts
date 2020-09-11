import { Router } from 'express';
import { PhaseController } from '../controllers/phaseController';
import { AuthController } from '../controllers/authController';


export class PhaseRoutes {

    public router: Router;
    public phaseController: PhaseController = new PhaseController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {

        this.router.get('/:id/:goalId', this.authController.authenticateJWT, this.phaseController.getPhases);
        this.router.get('/:id/:goalId/:phaseId', this.authController.authenticateJWT, this.phaseController.getPhaseWithId);
        this.router.post('/:id/:goalId', this.authController.authenticateJWT, this.phaseController.createPhase);

         // this.router.put("/:id/:goalId/:phaseId", this.authController.authenticateJWT, this.phaseController.updatePhase);
        // this.router.put("/:id", this.authController.authenticateJWT, this.productController.updateProduct);
        // this.router.delete("/:id", this.authController.authenticateJWT, this.productController.deleteProduct);
    }
}
