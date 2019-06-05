const express = require('express');
const router = express.Router();
//const auth = require('../../middleware/auth');

//const Profile = require('../../models/Profile');
const User = require('../../models/User');
const TeacherClass = require('../../models/teacherClass');

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

module.exports = router;