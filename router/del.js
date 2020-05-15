var Student = require("../models/Student.js");
const express=require('express')
const router=express.Router()
const utils = require('../utils')
const CreateMsg = utils.createMsg;
router.post('/:id', function (req, res, next) {
    const id = req.params.id
    Student.remove({ _id: id }, function (err, result) {
        if(err) {
            console.log(err)
            res.send(CreateMsg('0', '删除失败'))
        } else {
            res.send(CreateMsg('1', '删除成功'))
        }
    })
})
module.exports = router