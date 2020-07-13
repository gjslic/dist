//启动服务器
var ws = require("ws"); //引入ws
var WebSocket = ws.Server; //ws服务器
var wss = new WebSocket({
  port: 3000
}); //端口
console.log("等待链接");
var socketArr = [];
//连接数据
var db = require('./db.js');

// 链接事件
wss.on("connection", function (socket) {
  console.log("连接成功...");
  socket.on("message", function (msg) {
    console.log(msg);
    var obj = JSON.parse(msg);
    var type = obj.type;
    var reObj;
    switch (type) {
        //前台页面加载保存socket
      case 'show':
        var flag = 0;

        // 判断重复
        if (socketArr.length == 0) {
          var infoObj = {
            id: obj.account,
            sockets: socket
          }
          socketArr.push(infoObj);
        } else {
          for (var i = 0; i < socketArr.length; i++) {
            if (socketArr[i].id == obj.account) {
              console.log('重复了')
              flag = 1
            }
          }
          console.log(flag)
          if (flag == 0) {
            var infoObj = {
              id: obj.account,
              sockets: socket
            }
            socketArr.push(infoObj);
          }
        }


        console.log(socketArr);
        console.log(socketArr.length);
        break;
        //接受用户发的消息
      case 'infor':
        var sender = obj.sender; //发送者
        var receiver = obj.receiver; //接收者
        var container = obj.container; //发送内容
        var nowT = new Date().toLocaleDateString() + new Date().toLocaleTimeString();
        // console.log(obj);
        //把聊天记录存入数据库
        var addSql = 'INSERT INTO peanut_chat(sender,receiver,content) VALUES(?,?,?)';
        var addSqlParams = [sender, receiver, container];
        //增

        db(addSql, addSqlParams, function (err, result) {
          if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
          }
          console.log("添加聊天信息成功");
          reObj = {
            type: 'infor',
            id: obj.sender,
            container: {
              date: nowT,
              text: {
                text:  obj.container
              },
              mine: false,
              name: obj.name,
              img: obj.img
            },
          }

          for (var i = 0; i < socketArr.length; i++) {
            if (socketArr[i].id == receiver) {
              console.log(reObj)
              socketArr[i].sockets.send(JSON.stringify(reObj));
            }
          }
        });
        break;
        
    }
  })

})