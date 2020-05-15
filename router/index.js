var Student = require("../models/Student.js");

module.exports = function (app) {
    app.get('/', (req, res) => {
        Student.find({}, function (err, result) {
            if(err) {
                res.send('500')
            } else {
                //    console.log(result)
                res.render("index", {
                    "students": result
                });
            }
        })
    })
    app.use('/add', require('./add'))
    app.use('/edit', require('./edit'))
    app.use('/del', require('./del'))
    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404')
        }
    })
}