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

    alert(connection,message,status, callback) {
        let mailOptions = {
            from: '"ICM ping monitor"', // sender address
            to: receiverEmail, // list of receivers
            subject: 'Status change alert', // Subject line
            html: `<html>388E3C
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                <!-- Bootstrap core CSS -->
                <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
                <!-- Material Design Bootstrap -->
                <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.0/css/mdb.min.css" rel="stylesheet">
                <head>
                    <body>
                      <div style="height:20x"></div>
                        <div class="container">
                            <div class="row" style="border-bottom:solid 0.5px #BDBDBD;border-left:solid 0.5px #BDBDBD;border-right:solid 0.5px #BDBDBD;height:400px">
                                <div class="col-lg-1" style="text-align:center;border-top:5px solid ${status?'#388E3C':'#FF5252'};height:20px;color:#">
                                  <b>Ping Monitor</b>
                                  <div style="margin-top:15%"></div>
                                  <div><b>Test</b>  <code>1.1.1.4</code></div>
                                   <div>${message}</div>
                                </div>
                        </div>
                    </body>
            </html>`
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