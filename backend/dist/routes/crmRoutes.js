"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainController_1 = require("../controllers/mainController");
const path = require("path");
class Routes {
    constructor() {
        this.MainController = new mainController_1.MainController();
    }
    routes(app) {
        app.route('*').get((req, res) => {
            res.sendFile(path.join(__dirname + "/../../public"));
        });
        // Contact
        app
            .route("/api/users")
            .get((req, res, next) => {
            // middleware
            if (req.query.key !== "5eb59d3f652dc13c24554e2b") {
                res.status(401).send("You shall not pass!");
            }
            else {
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
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map