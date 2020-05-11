"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
const userAuth_1 = require("../models/userAuth");
const mongodb_1 = require("mongodb");
const Users = mongoose.model('Users', userModel_1.UserSchema);
const UserAuth = mongoose.model('UserAuth', userAuth_1.UserAuthSchema);
class MainController {
    login(req, res) {
        console.log(req.params);
        UserAuth.findOne({ userName: req.params.userName, password: req.params.password }, (err, user) => {
            if (err) {
                res.send(err);
            }
            if (user) {
                res.json({ result: true, userId: user.userId });
            }
            else {
                res.json({ result: false });
            }
        });
    }
    addNewUser(req, res) {
        let newUser1;
        const clone = Object.assign({}, req.body);
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
        }
        else {
            UserAuth.findOne({ email }).then((user) => {
                if (user) {
                    errors.push({ msg: 'Email already exists' });
                }
            });
        }
        if (errors.length) {
            res.send({ userGenration: false });
        }
        else {
            newUser.save((err, User) => {
                if (err) {
                    res.send(err);
                }
                if (err) {
                    throw err;
                }
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
                });
                res.send({ "userCreated": true, _id: User._id });
            });
        }
    }
    getUsers(req, res) {
        Users.find({}, (err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    }
    getUserWithID(req, res) {
        Users.findById(req.params.userId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    updateUser(req, res) {
        Users.findOneAndUpdate({ _id: req.params.UserId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    deleteUser(req, res) {
        Users.remove({ _id: req.params.UserId }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
    addAchievement(req, res) {
        req.body._id = new mongodb_1.ObjectID();
        Users.findOneAndUpdate({ _id: req.params.userId }, { $push: { achievement: req.body } }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
}
exports.MainController = MainController;
//# sourceMappingURL=mainController.js.map