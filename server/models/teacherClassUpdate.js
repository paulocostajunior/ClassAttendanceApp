const mongoose = require("mongoose");

const TeacherClassSchema = new mongoose.Schema({
    idProfessor: {
        type: String
    },
    indexMateria: {
        type: String
    },
    indexStudent: {
        type: String
    }
});

module.exports = TeacherClass = mongoose.model('teacherclass', TeacherClassSchema);