const express = require('express');
const router = express.Router();
const jwt = require('./utils/jwt');

const chapters = require('./controllers/chapterController');
const UserController = require('./controllers/userControllers');

router.get('/',(req,res)=>{
    return res.status(200).json({
        app: "Escriba",
        version: "2.0",
        description:"Included Authentication system"
    })
});

//Chapters
router.get('/chapters',chapters.index);
router.get('/chapters/:id',chapters.search);
router.post('/chapters/create',jwt.verify,chapters.create);
router.put('/chapters/:id',jwt.verify,chapters.update);
router.delete('/chapters/:id',jwt.verify,chapters.delete);

//Users
router.get('/users',UserController.index)
router.post('/users',jwt.verify,UserController.create)
router.put('/users/update',jwt.verify,UserController.update)
router.put('/users/update/:id',jwt.verify,UserController.update)
router.delete('/users/delete/:id',jwt.verify,UserController.delete)
router.post('/auth',UserController.login)



module.exports = router;