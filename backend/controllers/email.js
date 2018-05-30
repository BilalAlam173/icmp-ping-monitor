const nodeMailer = require('nodemailer');
let transporter = nodeMailer.createTransport({
    host: process.env.APP_EMAIL_HOST,
    port: process.env.APP_EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.APP_EMAIL_ID, // generated ethereal connection
        pass: process.env.APP_EMAIL_PASSWORD // generated ethereal password
    }
});

module.exports = {

    alert(connection, callback) {
        let mailOptions = {
            from: '"ICM ping monitor"', // sender address
            to: receiverEmail, // list of receivers
            subject: 'Status change alert', // Subject line
            html: `<h4>The status have been changed for the connection 
    <b style="color:#009688"> ${connection.name} </b>with IP address <code style="color:#009688"> ${connection.ip} </code>
     to <b style="color:${connection.status?'#00695C':'#E57373'}"> ${connection.status? 'online' : 'offline'} </b> <h4>`
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