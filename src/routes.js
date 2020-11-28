const express = require('express');
const router = express.Router();

const chapters = require('./controllers/chapterController');

router.get('/',(req,res)=>{
    return res.status(200).json({
        app: "Escriba",
        version: 1.0,
        description:"This app handles list, insert, update and delete of chapters"
    })
});
router.get('/chapters',chapters.index);
router.post('/chapters/create',chapters.create);
router.put('/chapters/:id',chapters.update);
router.delete('/chapters/:id',chapters.delete);


module.exports = router;