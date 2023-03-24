let express = require("express");
let router = express.Router();
let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

router.get("/home", indexController.displayHomePage);

/*GET Route for displaying the Login page*/
router.get("/login", indexController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post("/login", indexController.processLoginPage);

/*GET Route for register page*/
router.get("/register", indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post("/register", indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get("/logout", indexController.performLogout);

function requireAuth(req, res, next) {
  console.log(req.isAuthenticated);
  //check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}
//connect to our contacts model
let dashboardController = require("../controllers/dashboard");
//GET ROUTE for the contact list page -READ OPERATION
router.get("/dashboard", requireAuth, dashboardController.displayDashboard);

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get(
  "/incidentRecord/add",
  requireAuth,
  dashboardController.displayAddIncidentRecord
);

module.exports = router;
