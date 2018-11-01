## 项目概述

本项目为最简版的服务端系统

- 提供api
- 前后端分离
- 关联使用的数据库是mongodb


## 启动
node src/server.js
出现 http://localhost:3000 即启动成功


## api

- 登录
POST /api/user/login
header: {
    Authorization: Basic new Buffer(username:password).toString('base64')
}

## 如何新增一个api

- src/router.js 新require一个文件，并且新增一个路由地址
- src/controllers 模仿excample.js新增一个controller文件
- src/schema 模仿excample.js新增一个schema文件
