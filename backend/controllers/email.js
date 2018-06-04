const nodeMailer = require('nodemailer');
const settingModel = require('../models/setting');
module.exports = {

    alert: async (connection, message, status, callback) => {

        const setting = await settingModel.find({});

        let transporter = nodeMailer.createTransport({
            host: setting[0].sender_emailHost,
            port: setting[0].sender_emailPort,
            secure: true, // true for 465, false for other ports
            auth: {
                user: setting[0].sender_emailId, // generated ethereal connection
                pass: setting[0].sender_emailPassword // generated ethereal password
            }
        });

        let mailOptions = {
            from: '"ICM ping monitor"', // sender address
            to: setting[0].reciever_emailId, // list of receivers
            subject: 'Status change alert', // Subject line
            html: `<html>
            <head>
              <meta charset="utf-8">
            </head>
            <body style="font: 15px/1.5 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 300; color: #7E899B;">
              <div id="email" style="margin: 25px auto; text-align: center; background: #fff;">
                <h1 style="text-align:Center">Ping monitor</h1>
                <table id="content" style="text-align: center; margin: 0 auto; padding: 150px 0; border-color: #E6EDF4; border-radius: 3px; border-style: solid; border-width: 1px 1px 1px; width: 100%; max-width: 600px; border-top: 2px solid ${status?`#43A047`:`#F12E65`};"
                  width="100%" align="center">
                  <tbody>
                    <td width="25px"></td>
                    <td>
                      <div id="name" style="font-size: 22px; font-weight: 400; color: #1C2023;">${connection.name}
                        <code>${connection.ip}</cod>
                      </div>
                      <div id="message">${message}</div>
                    </td>
                    <td width="25px"></td>
                  </tbody>
                </table>
                <div id="link" style="padding: 30px 0;">
                  <a href="#" style="text-decoration: none; border: none; display: inline-block; background: white; border: 1px solid #E6EDF4; font-weight: 400; color: inherit; line-height: 1; padding: 12px 28px 12px; font-size: 0.8rem; font-family: inherit; outline: none; cursor: pointer; border: 1px solid #E6EDF4; border-radius: 35px;">go to app</a>
                </div>
              </div>
            </body>
            </html>`
        };



        transporter.sendMail(mailOptions, (error, info) => {
            console.log(error)
            if (error) {
                return error
            } else {
                return info
            }
        });
    }
}