"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
const Users = mongoose.model('Users', userModel_1.UserSchema);
class MainController {
    addNewUser(req, res) {
        const newUser = new Users(req.body);
        newUser.save((err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
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
        console.log(req);
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
            res.json({ message: "Successfully deleted contact!" });
        });
    }
}
exports.MainController = MainController;
//# sourceMappingURL=mainController.js.map