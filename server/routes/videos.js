let express = require('express');
let router = express.Router();

//helper function for guard purposes
function requireAuth(req, res, next) {
    //check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    next();
}

// connect to our books model 
let videosController = require('../controllers/videos');

//GET ROUTE for the book list page -READ OPERATION
router.get('/', videosController.displayVideoNoteList);

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get('/add', requireAuth, videosController.displayAddPage);

/* POST Route for processing the Add Page - CREATE operation*/
router.post('/add', requireAuth, videosController.processAddPage);

/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id', requireAuth, videosController.displayEditPage);

/*POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', requireAuth, videosController.processEditPage);

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, videosController.performDelete);

module.exports = router;