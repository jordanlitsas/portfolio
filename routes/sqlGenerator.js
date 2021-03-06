var express = require('express');
var router = express.Router();
var controllers = require('../controllers');



router.post('/getDatabase', (req, res) => {
    controllers.sqlGeneratorController.getUser(req, res);
})


router.post('/createDatabase', (req, res) => {
   controllers.sqlGeneratorController.createUser(req, res)
   
})

router.post('/saveDatabase', (req, res) => {
    controllers.sqlGeneratorController.saveUserDatabase(req, res);  
});

router.post('/generateSqlScript', (req, res) => {
    controllers.sqlGeneratorController.generateSqlScript(req, res);
})

router.post('/delete_database', (req, res) => {
    controllers.sqlGeneratorController.deleteDatabase(req, res);
})

  
  
module.exports = router;