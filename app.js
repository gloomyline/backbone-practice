var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('mongoose')
var app = express();
db.connect('mongodb://localhost/student_db');

////引入arttemplate模板
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

var Card = db.model('card', {
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  address: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  qq: { type: String, default: "" },
  description: { type: String, default: "" }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用mongoose保存数据到数据库，新建一个collections集合，名字为card
// 存数据
app.post('/card', (req, res) => {
  console.log('------执行/card post请求---------')
  console.log('req.query---------')
  console.log(req.query);
  console.log('req.body---------')
  console.log(req.body);
  // 在服务器端保存数据 把数据写入数据库
  // 在返回数据的时候把保存的数据读取出来放入data值中
  var card = new Card(req.body);
  card.save((err) => {
    if (err) {
      res.json({ status: 'n', msg: "新增数据失败", data: {} })
    }
    else {
      var data = card.toObject();
      data.id = data._id;
      delete data._id;
      res.json({ status: 'y', msg: "新增数据成功", data: data })
    }
  })

})

app.put('/card', (req, res) => {
  console.log('------执行/card put请求---------')
  console.log('req.query---------')
  console.log(req.query);
  console.log('req.body---------')
  console.log(req.body);
  // 在服务器端保存数据 把数据写入数据库
  // 在返回数据的时候把保存的数据读取出来放入data值中
  var card = new Card(req.body);
  Card.findByIdAndUpdate(req.body.id, req.body, (err) => {
    if (err) {
      res.json({ status: 'n', msg: "修改数据失败", data: {} })
    }
    else {
      var data = card.toObject();
      data.id = req.body.id;
      delete data._id;
      res.json({ status: 'y', msg: "修改数据成功", data: data })
    }
  })
})

// 取数据
app.get('/card', (req, res) => {
  console.log('------执行/card get请求---------')
  console.log('req.query---------')
  console.log(req.query);
  console.log('req.body---------')
  console.log(req.body);
  Card.findById(req.query.id, (err, data) => {
    if (err) {
      res.json({ status: 'n', msg: "获取数据失败", data: {} })
    }
    else {
      if (!!data) {
        var temData = data.toObject();
        temData.id = data._id;
        delete temData._id
        res.json({ status: "y", msg: "获取数据成功", data: temData });
      }
      else {
        res.json({ status: "n", msg: "获取数据失败", data: {} });
      }
    }
  })
})


app.listen(3001, (req, res) => {
  console.log('服务器运行中')
})
