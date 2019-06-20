const express = require('express');
const router = express.Router();
//const auth = require('../../middleware/auth');

//const Profile = require('../../models/Profile');
const User = require('../../models/User');
const TeacherClass = require('../../models/teacherClass');
//const TeacherClass2 = require('../../models/teacherClassUpdate');

// //GETALL
// router.get("/", async (req, res) => {
//     try {
//         const teacherClass = await TeacherClass.find();

//         if(!teacherClass) {
//             return res.status(400).json({msg: 'There is no data available'});
//         }
//         res.json(teacherClass);

//     } catch(err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

//BYID
router.get("/:idProfessor", async (req, res) => {
    try {
        const teacherClass = await TeacherClass.findOne({ idProfessor: req.params.idProfessor });

        if(!teacherClass) {
            return res.status(400).json({msg: 'There is no profile for this user'});
        }
        res.json(teacherClass);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.put("/", async (req, res) => {
    var teacherClassBody = {
        "idProfessor": req.body.idProfessor,
        "indexTurma": req.body.indexTurma,
        "indexMateria": req.body.indexMateria,
        "indexStudent": req.body.indexStudent

    };

    try {
        TeacherClass.findOne({ idProfessor: teacherClassBody.idProfessor })
        .lean().exec(function(err, data){
            if (data.turmas[teacherClassBody.indexTurma].materias[teacherClassBody.indexMateria].absencias[teacherClassBody.indexStudent].exists == true) {
                data.turmas[teacherClassBody.indexTurma].materias[teacherClassBody.indexMateria].absencias[teacherClassBody.indexStudent].exists = false;
            } else {
                data.turmas[teacherClassBody.indexTurma].materias[teacherClassBody.indexMateria].absencias[teacherClassBody.indexStudent].exists = true;
            }

            var teacherClassUpdate = new TeacherClass(data)

            TeacherClass.findOne({ _id: data._id }).deleteOne().exec();

            teacherClassUpdate.save(function (err) {
                    if (err) return handleError(err);
                    // saved!
                });

            res.send(data);
        });

        //teacherClass.turmas[0].materias[0].absencias[0].exists = false;

        
        // teacherClass.save(function (err) {
        //     if (err) return handleError(err);
        //     // saved!
        // });

        // if(!teacherClass) {
        //     return res.status(400).json({msg: 'There is no profile for this user'});
        // }
        //res.json(teacherClass);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;