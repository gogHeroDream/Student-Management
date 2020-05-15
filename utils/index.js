const obj ={
    createMsg: function (code, msg) {
        var obj = new Object;
        obj.code = (code || code === 0) ? code : '1'
        if (msg !== undefined) obj.msg = msg
        return obj;
    }
}
module.exports = obj
