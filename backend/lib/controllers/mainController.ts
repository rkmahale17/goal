import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { UserSchema } from '../models/userModel';


const Users = mongoose.model('Users', UserSchema);


export class MainController {

         public addNewUser(req: Request, res: Response) {
           const newUser = new Users(req.body);

           newUser.save((err, User) => {
             if (err) {
               res.send(err);
             }
             res.json(User);
           });
         }

         public getUsers(req: Request, res: Response) {
           Users.find({}, (err, users) => {
             if (err) {
               res.send(err);
             }
             res.json(users);
           });
         }

  public getUserWithID(req: Request, res: Response) {
           console.log(req);
           Users.findById(req.params.userId, (err, user) => {
             if (err) {
               res.send(err);
             }
             res.json(user);
           });
         }

         public updateUser(req: Request, res: Response) {
           Users.findOneAndUpdate(
             { _id: req.params.UserId },
             req.body,
             { new: true },
             (err, user) => {
               if (err) {
                 res.send(err);
               }
               res.json(user);
             }
           );
         }

         public deleteUser(req: Request, res: Response) {
           Users.remove({ _id: req.params.UserId }, (err, user) => {
             if (err) {
               res.send(err);
             }
             res.json({ message: "Successfully deleted contact!" });
           });
         }
       }
