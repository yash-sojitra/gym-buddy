const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
const validator = require('validator');

//user schema
const userSchema = new Schema({ 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    uniqueString: {
        type: String,
        required: true
    },
    isValid: {
        type: Boolean,
        default: false,
        required: true
    }
})

//static signup method
userSchema.statics.signup = async function (email, password, uniqueString, isValid) {

    //validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    //confirming no duplicates
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error("Email already in use")
    }

    //hashing password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    //creating user
    const user = await this.create({ email, password: hash, uniqueString, isValid })
    return user
}

//static login method
userSchema.statics.login = async function (email, password) {
    
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Incorrect Email")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("incorrect password")
    }
    return user
}

module.exports = mongoose.model("User", userSchema)