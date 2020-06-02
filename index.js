const express = require('express') //express모듈을 가져온다.
const app = express() //새로운 express앱을 만든다
const port = 5000 //사용할 포트를 지정
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jaewonks:Kk052614..@jaewondb-htg21.mongodb.net/test?retryWrites=true&w=majoritynp',{
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!')) //해당 내용을 출력

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) //지정된 포트에 내용을 실행