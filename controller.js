const User = require('./model');
const nodeMailer = require('nodemailer');
const receiverEmail = 'bilalalam173@gmail.com'
require('dotenv').config();
let transporter = nodeMailer.createTransport({
    host: process.env.APP_EMAIL_HOST,
    port: process.env.APP_EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.APP_EMAIL_ID, // generated ethereal user
        pass: process.env.APP_EMAIL_PASSWORD  // generated ethereal password
    }
});

// expose a set of operations 
module.exports = {

    insert: (req, res) => {

        const user = new User({
            name: req.body.name,
            ip: req.body.ip,
            startTime: req.body.startTime,
        });

        // call save funtion on that model's instance
        user.save((err, user) => {
            if (err) {
                // return error
                res.status(500).json({
                    message: "something went wrong"
                });
            } else {
                // return success
                res.status(200).json(user);
            }

        });
    },
    get: (req, res) => {
        User.find({}, function (err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.sendStatus(500);
            }
        });
    },
    getSimple: (callback) => {
        User.find({}, function (err, docs) {
            if (!err) {
                callback(docs, null);
            } else {
                callback(null, err);
            }
        });
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if (err) {
                return res
                    .status(500)
                    .send({
                        error: "unsuccessful"
                    })
            };
            res.send({
                success: "success"
            });
        });
    },
    updateSimple: (id, body) => {
        if(body.ip==='1.8.27.1'){
            console.log(body.status);
        }
        User.findByIdAndUpdate(id, body, (err, user) => {
            if (err) {
                return 0;
            }
            return user;
        });
    },
    delete: (req, res) => {
        User.remove({
            _id: req.params.id
        }, function (err) {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });
    },
    notify(user, callback) {
        let mailOptions = {
            from: '"ICM ping monitor"', // sender address
            to: receiverEmail, // list of receivers
            subject: 'Status change alert', // Subject line
            html: `<h4>The status have been changed for the user 
        <b style="color:#009688"> ${user.name} </b>with IP address <code style="color:#009688"> ${user.ip} </code>
         to <b style="color:${user.status?'#00695C':'#E57373'}"> ${user.status? 'online' : 'offline'} </b> <h4>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            console.log(error)
            if (error) {
                callback(null, error);
            } else {
                callback(info, null)
            }
        });
    }
}