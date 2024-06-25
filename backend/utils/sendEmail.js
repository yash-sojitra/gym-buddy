const nodemailer = require('nodemailer');

function sendMail(email, uniqueString) {

    /// returns true if sending mail is successful

    var transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: "Gmail",
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        }
    })

    var mailOptions
    let sender = "Yash Sojitra"
    mailOptions = {
        from: sender,
        to: email,
        subject: "verification email",
        html: `Press <a href="http://localhost:4000/verify/mail/${uniqueString}">here</a> to verify your email`
    }

    transport.sendMail(mailOptions, (err, res) => {

        if (err) {
            console.log("=>nodemailer err", err);
            throw Error("Error sending Mail");
        } else {
            console.log("mail sent");
            return true
        }
    })
}

module.exports = sendMail