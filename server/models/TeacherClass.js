const mongoose = require("mongoose");

const TeacherClassSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    date: {
        type: Date
    }
});

module.exports = TeacherClass = mongoose.model('teacherclass', TeacherClassSchema);