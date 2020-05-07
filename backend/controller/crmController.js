"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var crmModel_1 = require("../model/crmModel");
var Contact = mongoose.model("Contact", crmModel_1.ContactSchema);
var ContactController = /** @class */ (function () {
    function ContactController() {
    }
    ContactController.prototype.addNewContact = function (req, res) {
        var newContact = new Contact(req.body);
        newContact.save(function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    };
    ContactController.prototype.getContacts = function (req, res) {
        Contact.find({}, function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    };
    ContactController.prototype.getContactWithID = function (req, res) {
        Contact.findById(req.params.contactId, function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    };
    ContactController.prototype.updateContact = function (req, res) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { "new": true }, function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    };
    ContactController.prototype.deleteContact = function (req, res) {
        Contact.remove({ _id: req.params.contactId }, function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted contact!" });
        });
    };
    return ContactController;
}());
exports.ContactController = ContactController;
