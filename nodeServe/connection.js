// 引入插件ws
const Webscoket = require('ws');

// 建立通信
const Serve = new Webscoket.Server({host: '127.0.0.1', port: 8000})
// resolveMessage
Serve.on('connection', handleConnection)

function handleConnection(ws) {

    console.log('开始建立通信');
    // 通信建立完成之后的几种监听模式

    ws.on('error', resolveError)
    ws.on('close', resolveClose)
    ws.on('message', resolveMessage)
    ws.send(JSON.stringify({user:'杰瑞',msg:'汤姆你收到了吗，收到请回复'}))
}

function resolveError(e) {
    console.log(e)
}

function resolveClose(e) {
    console.log('通信关闭')
    console.log(e)
}

// 接受客户端发送来的信息
function resolveMessage(data) {
    console.log('已接收到客户端发送来的信息：', data)
    this.send(JSON.stringify({uesr:'杰瑞',msg:'老表我已经收到你的信息了，等我过去吧'}))
    const jsonString = data.toString('utf-8');  // 将Buffer对象转换为字符串（假设Buffer对象中的数据是以UTF-8编码的字符串）
    const jsonObj = JSON.parse(jsonString);  // 将字符串转换为JSON对象
    const jsonStringAgain = JSON.stringify(jsonObj);  // 再将JSON对象转换为字符串（如果需要的话）
    console.log(JSON.parse(jsonStringAgain));
}
