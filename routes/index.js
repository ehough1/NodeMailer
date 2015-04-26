var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");


router.all('/', function(req, res, next) {
	
	var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "eimear.hough1@gmail.com",
        pass: "ThisIsMyNewGooglePassword"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
	name : req.query.name,
	email : req.query.email,
	subject : req.query.subject,
	message : req.query.message
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
 
});

module.exports = router;