var express = require('express')
    , http = require('http')
    , path = require('path');

var static = require('serve-static');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

//==== 서버 실행 ====//
const httpServer = http.createServer(app).listen(app.get('port'), function(){
    console.log('서버가 시작되었습니다. 포트 : ', app.get('port'));
});

//==== socket.io ====//
const io = require("socket.io")(httpServer, {
    cors:{
        origin: "http://localhost:8081",
        credentials: true
    },
    allowEIO3: true
  });
console.log('socket.io 요청을 받아들일 준비가 되었습니다.');

// 클라이언트가 연결했을 때의 이벤트 처리
io.on('connection', function(socket) {
    socket.on('send_chat', function(data) {
        console.log(data)
        io.emit('chat', data)
    });
});
