import {Request, Response, NextFunction} from 'express';
import { MainController } from "../controllers/mainController";
import * as path from "path";

export class Routes {
         public MainController: MainController = new MainController();

         public routes(app): void {
           app.route('*').get((req: Request, res: Response) => {
               res.sendFile(path.join(__dirname+"/../../public"))
           });

           // Contact
           app
             .route("/api/users")
             .get((req: Request, res: Response, next: NextFunction) => {
               // middleware
               if (req.query.key !== "5eb59d3f652dc13c24554e2b") {
                 res.status(401).send("You shall not pass!");
               } else {
                 next();
               }
             }, this.MainController.getUsers)

             // POST endpoint
             .post(this.MainController.addNewUser);

           // User detail
           app
             .route("/api/user/:userId")
             // get specific contact
             .get(this.MainController.getUserWithID)
             .put(this.MainController.updateUser)
             .delete(this.MainController.deleteUser);
           // add achievements


           app
             .route("/api/user/updateAchievement/:userId")
             .put(this.MainController.addAchievement);
           
           //login
           app
             .route("/api/login/:userName/:password")
             .get(this.MainController.login)
         }

       }
