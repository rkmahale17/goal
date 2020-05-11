import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { UserSchema } from '../models/userModel';
import { UserAuthSchema } from '../models/userAuth';

import { ObjectID } from 'mongodb';
import { PassThrough } from 'stream';

const Users = mongoose.model('Users', UserSchema);
const UserAuth = mongoose.model('UserAuth', UserAuthSchema);


export class MainController {

  public login(req: Request, res: Response) {
    console.log(req.params)
    UserAuth.findOne({ userName: req.params.userName , password : req.params.password }, (err, user) => {
      if (err) {
        res.send(err);
      }
      if (user) {
        res.json({ result: true ,userId: user.userId });
      }
      else {
        res.json({ result: false});
      }
 
    });
  }

  public addNewUser(req: any, res: Response) {
    let newUser1;
    const clone = { ...req.body };
    delete req.body.password;
    const newUser = new Users(req.body);
    const errors = [];
    const { firstName, lastName, email, password } = clone;
    if (!firstName || !lastName || !email || !password) {
      errors.push({ msg: 'Please enter all fields' });
    }
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if (errors.length > 0) {
      return errors;
    } else {
      UserAuth.findOne({ email }).then((user) => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
        }
      });
    }
    if (errors.length) {
      res.send({ userGenration: false });

    } else {
      newUser.save((err, User) => {
        if (err) {
          res.send(err);
        }
        if (err) { throw err; }
        // this.createNewUser(User.email, User._id, clone.password);
        let userName = User.email;
        let userId = User._id;
        let password = clone.password;

        const newAuthUser = new UserAuth({
          userName, userId, password
        });

        newAuthUser
          .save((err, authUser) => {
            if (err) {
              res.send(err);
            }
           
          })
        res.send({ "userCreated": true ,_id:User._id})
        
      })

    }
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
      res.json({ message: 'Successfully deleted contact!' });
    });
  }

  public addAchievement(req: Request, res: Response) {

    req.body._id = new ObjectID();
    Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { achievement: req.body } },
      (err, user) => {
        if (err) {
          res.send(err);
        }
        res.json(user);
      }
    );
  }


}
