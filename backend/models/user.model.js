const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function (username, email, password) {

    const exists = await this.findOne({ username, email })

    if (exists) {
        throw Error('Email already in use')
    }
    //generating salt
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ username, email, password: hash })

    return user
}


// static login method
userSchema.statics.login = async function ( email, password) {

    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    //find user
    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }
    //match email with pw hash
    const match = await bcrypt.compare(password, user.password//hashedpw
    )
    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)