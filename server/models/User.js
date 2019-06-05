const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    idProfessor: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = User = mongoose.model('user', UserSchema);