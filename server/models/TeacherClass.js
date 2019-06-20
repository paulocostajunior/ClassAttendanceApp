const mongoose = require("mongoose");

const TeacherClassSchema = new mongoose.Schema({
    idProfessor: {
        type: String
    },
    professor: {
        type: String
    },
    login: {
        type: String
    },
    senha: {
        type: String
    },
    turmas: [{
        descricao: {
            type: String
        },
        materias: [{
            nome: {
                type: String
            },
            alunos: [{
                codigo: {
                    type: String
                },
                nome: {
                    type: String
                },
            }],
            datas: [{
                type: String
            }],
            absencias: [{
                nome: {
                    type: String
                },
                data: {
                    type: String
                },
                exists: {
                    type: Boolean
                }
            }]
        }]
    }]
});

module.exports = TeacherClass = mongoose.model('teacherclass', TeacherClassSchema);