var net = require ('net');  // net 모듈 로드
var server = net.createServer((socket) => {     // TCP 서버 생성
    socket.end("hello world");  // 접속하면 hello world 응답
});

server.on('error', (err) => {   // 네트워크 에러 처리
    console.log(err);
});

server.listen(9000, () => { // 9000 포트 리슨
    console.log('listen', server.address());    // 리슨이 가능해지면 화면에 출력
});

// output
// listen { address: '::', family: 'IPv6', port: 9000 }