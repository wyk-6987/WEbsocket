<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div style="width: 100%;text-align: center" v-if="false">
    <button @click="sendMsg">点击发送信息到服务端</button>
    <button @click="closeMsg" style="margin-left: 100px">关闭通信</button>
  </div>
  <Update></Update>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Update from "@/components/Update";
const status = ref(false) // 判断通信的连接状态
const sendMsg = () => {
  console.log('你好服务端，这是我给你发送的信息')
  const CanSend = status.value;
  console.log(CanSend)
  if(CanSend){
    socket.send(JSON.stringify({user:'汤姆',msg:'老表快来啊，淄博烧烤真不错，一起搞点啊'}))
  }else {
    // 客户端重新发起请求
    socket = new WebSocket('ws://127.0.0.1:8000')
    status.value = true
  }
}

const closeMsg = ()=>{
  status.value = false
  socket.close(1000);
}
// 建立与服务端之间的通信
let  socket = new WebSocket('ws://127.0.0.1:8000')
const OtherConection = ()=>{

  // 通过open方法建立与服务端之间的连接
  socket.addEventListener('open',(e)=>{
    console.log('链接通道打开',e)
    status.value= true
    // 建立通信之后,通过自带的send方法向服务端发送信息
    socket.send(JSON.stringify({user:'汤姆',msg:'杰瑞,最近过的好吗'}))
  })

  socket.addEventListener('message',(e)=>{
    console.log('接收到服务端的信息如下：',e)
  })

  socket.addEventListener('error',(e)=>{
    console.log(e)
  })

  socket.addEventListener('close',(e)=>{
    console.log(e)
    // 检测到关闭通信之后，建立新的通信连接
    socket = new WebSocket('ws://127.0.0.1:8000')
    status.value = true
  })

}
onMounted(() => {
  OtherConection()
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
