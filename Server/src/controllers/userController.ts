import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import '../auth/passportHandler';
import { User } from '../models/user';
import { Goal } from '../models/goal';

import { JWT_SECRET } from '../util/secrets';
import { Phase } from '../models/phase';


export class UserController {

  public async registerUser(req: Request, res: Response, done): Promise<void> {
    console.log(req.body.username);
    const isUserPresent = await User.find({ username: req.body.username });
    console.log(isUserPresent.length)
    if (isUserPresent.length > 0) {
      res.send({"error":"Username already present !"});

    } else {
      const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      const user = await User.create({
        username: req.body.username,
        password: hashedPassword
      });
      if (user) {
        const goal = await Goal.create({
          userId: user._id,
          name: req.body.name,
          email: req.body.username,
          mobile: req.body.mobile,
          gols: []
        });

        if (goal == null) {
          res.send('error in creating user');
        }
      }
      const token = jwt.sign({ username: req.body.username, scope: req.body.scope }, JWT_SECRET);
      res.status(200).send({ token });
    }
  }

  public authenticateUser(req: Request, res: Response, next: NextFunction) {
    console.log('going to login');

    try {
      passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) {
          return res.status(200).send({ status: 'error', code: 'unauthorized' });
        } else {
          const token = jwt.sign({ username: user.username }, JWT_SECRET);
          res.status(200).send({ token, userId: user._id });
        }
      })(req, res, next);

    } catch (error) {
      console.log(error);
    }

  }
}
