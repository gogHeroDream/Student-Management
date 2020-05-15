var Student = require("../models/Student.js");
const express=require('express')
const router=express.Router()
const utils = require('../utils')
const CreateMsg = utils.createMsg;
const upload = require("../utils/upload")
// 新增学生业
router.get('/', function (req, res, next) {
    res.render("add");
}) 
router.post('/', upload.single('pic'), function (req, res, next) {
    let file = req.file;
    const obj = req.body
    if(file&&file.path) obj.pic = '/uploads/'+file.filename

    Student.create(obj, function (err,result) {
        if(err) {
            console.log(err)
            res.send(CreateMsg('0', '插入失败'))
        } else {
            res.send(CreateMsg('1', '插入成功'))
        }
    })
})
module.exports = router