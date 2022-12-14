const mongoose = require('mongoose')

const userSchema = mongoose.Schema ({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName: {type: String, required: [true, 'please enter a first name']},
    lastName: {type: String, required: [true, 'please enter a lastt name']},
    email: {type: String, required: [true, 'please enter a email'], unique: true},
    password: {type: String, required: [true, 'please enter a password']}
})

module.exports = mongoose.model("user", userSchema)