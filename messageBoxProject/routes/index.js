var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/submit-form', function(req, res) {

    // req.body contains all the details filled in the form.
    console.log(req.body);

    const senderName = req.body.senderName;
    const message = req.body.message;

    let content = `Message was sent by ${senderName}
    Message - ${message}`;

    // console.log(__dirname); __dirname is a global variable, to get the current directory path
    // Writing the response into a text file
    fs.writeFile(path.join(__dirname, '../message.txt'), content, function(err) {
      if(err) { // In case of any error, print the error
        console.log(err);
        return;
      }
      res.render('submittedForm'); // Return back with the 'submittedForm' Page
    });

});

module.exports = router;
