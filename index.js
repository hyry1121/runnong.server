const express = require( 'express' ),
			bodyParser = require('body-parser'),
			mongoose = require( 'mongoose' ),
			compression = require( 'compression' )
const rootRouter = require( './src/router' )

// 链接数据库
// 开发runnong  上线mall
mongoose.connect( 'mongodb://localhost/mall' )

const app = express()

// 设置跨域 - 开发的时候需要打开
// app.use( require('cors')() )

// 解析请求数据
app.use( bodyParser.json() )  //解析 application/json 的请求头
app.use( bodyParser.urlencoded({ extended: false }) )  // 解析 application/x-www-form-urlencoded 的请求头
// api路由
rootRouter( app )

// 开启gizp压缩
app.use( compression() )
// 静态服务
app.use( '/', express.static('static/client') )
app.use( '/adminhahaha', express.static('static/admin') )

// 监听端口
app.listen( 80, (req,res) => {
	console.log( 'listen 80 ...' )
})