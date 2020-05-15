var express =require('express');
var app = express();
var db= require('./models/db.js')
app.set('view engine', 'ejs');
var bodyParser = require('body-parser')

app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

app.use('/uploads', express.static('./uploads'))
const router =require('./router')
router(app)
app.listen(3000)