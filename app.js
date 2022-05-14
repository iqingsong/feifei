const express = require('express')
const asyncUtil = require('express-async-handler')
const utils = require('./utils/utils')
const mysql = require('mysql')
const res = require('express/lib/response')
const req = require('express/lib/request')

const app = express()
const port = 80

const connection = mysql.createConnection({
  host: 'localhost', // 数据库服务器的地址
  user: 'root', // 账号
  password: '123', // 密码
  database: 'feifei', // 数据库名
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post(
  '/test',
  asyncUtil(async (req, res) => {
    res.json(utils.success('调用成功'))
  })
)

app.post(
  '/getCardinfo',
  asyncUtil(async (req, res) => {
    let { people, category, date } = req.body

    let str = `select * from cardinfo where user_num > ${peopel} and time >  ${date} `
    connection.query(str, (err, result) => {
      if (err) {
        res.json({ success: false, data: err })
      } else {
        res.json(utils.success(result))
      }
    })
  })
)

app.post(
  '/getAllCardinfo',
  asyncUtil(async (req, res) => {
    let str = `select * from cardinfo`
    connection.query()
    res.json(utils.success({ data: '调用成功' }))
  })
)

app.post(
  '/getAdminInfo',
  asyncUtil(async (req, res) => {
    let { username, password } = req.body
    let str = `select *from admin where username = "${username}" and password = "${password}"`
    connection.query(str, (err, result) => {
      if (err) {
        res.json({ success: false, data: err })
      } else {
        res.json(utils.success(result))
      }
    })
  })
)

app.post(
  '/updateCardInfo',
  asyncUtil(async (req, res) => {
    let { start, end, time, fy, bz, id } = req.body
    let str = ''
    if (start) {
      str += `start="${start}",`
    }
    if (end) {
      str += `end="${end}",`
    }
    if (time) {
      str += `time="${time}",`
    }
    if (fy) {
      str += `fy="${fy}",`
    }
    if (bz) {
      str += `bz="${bz}",`
    }
    str += `updateTime = ${new Date().getTime()}`
    let sql = `update cardinfo set ${str} where id=${id}`

    connection.query(sql, (err, result) => {
      if (err) {
        res.json({ success: false, data: err })
      } else {
        res.json(utils.success(result))
      }
    })
  })
)

app.post(
  '/addCardInfo',
  asyncUtil(async (req, res) => {
    let { start, end, time, fy, bz, username, user_num } = req.body
    let str = ''
    if (!start) {
      str = `start`
    } else if (!end) {
      str = `end`
    } else if (!time) {
      str = `time`
    } else if (!user_num) {
      str = `user_num`
    } else if (!username) {
      str = `username`
    } else if (!fy) {
      str = `fy`
    } else if (!bz) {
      str = `bz`
    }
    if (str !== '') {
      res.json({ success: fail, data: str })
    }

    let sql = `insert into cardinfo (username,start,end,time,fy,bz,user_num,createTime,updateTime) values("${username},${start}","${end}",${time},${fy},"${bz}",${user_num},${new Date()},${new Date()}))`

    connection.query(sql, (err, result) => {
      if (err) {
        res.json({ success: false, data: err })
      } else {
        res.json(utils.success(result))
      }
    })
  })
)

app.listen(port, () => {
  connection.query('select * from admin', (err, res) => {
    if (!err) {
      console.log('数据库连接成功')
    }
  })
  console.log('server start on : http://127.0.0.1')
})
