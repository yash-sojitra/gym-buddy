const User = require("../models/User")

const mailVerify = async (req, res) => {

    const {uniqueString} = req.params

    const user = await User.findOne({uniqueString})

    if (user) {
        user.isValid = true
        await user.save()
        res.json({info:"user verified Successfully"})
    }
    else{
        res.json("User not found")
    }

}

module.exports = mailVerify