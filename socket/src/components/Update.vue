<template>
 <div>
   通过常用接口数据进行更新提示
 </div>
</template>

<script setup>
 import axios from "axios";

// 模块A初始化页面调用就接口
 axios.get('www.xxxxx').then(res => {
      const NeedUpdate = res.data.flag
      if(NeedUpdate){
        // 调用菜单栏接口进行重新缓存
      }
 })
</script>

<style scoped>

</style>
