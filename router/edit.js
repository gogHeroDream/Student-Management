var Student = require("../models/Student.js");
const express=require('express')
const router=express.Router()
const utils = require('../utils')
const CreateMsg = utils.createMsg;
const upload = require("../utils/upload")
// 编辑学生业
router.get('/:id', function (req, res, next) {
    const id = req.params.id
    Student.findOne({_id: id},function(err,result){
        if (err) {
            res.send('500')
        } else {
            res.render("edit", {
                id: id,
                student: result
            });
        }
    })
}) 
router.post('/:id', upload.single('pic'), function (req, res, next) {
    const id = req.params.id
    Student.findOne({ _id: id }, function (err, result) {
        if(err) {
            console.log(err)
            res.send(CreateMsg('0', '编辑失败'))
        } else {
            const obj = req.body
            let file = req.file;
            if (file && file.path) obj.pic = '/uploads/' + file.filename
            for (let k in obj) {
                result[k] = obj[k]
            }
            result.save()
            res.send(CreateMsg('1', '编辑成功'))
        }
    })
})
module.exports = router