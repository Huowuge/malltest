<script>
import {ref, reactive, toRefs} from 'vue' 
// import  axios from 'axios'             //导入axios包，因为个性化axios也要配置并操作请求
import {request} from './utils/request'   //导入封装的axios
export default{
  name: 'App',
  setup(){
    let getRes = ref('')
    request({    //二次配置个性化axios并返回
      url: '/base64/{5L2g5Y+v55yf5piv5Liq5aSn5Y+v54ix}'
    }).then(res=>{
        getRes.value=res.data
        console.log(res)
    }).catch(err=>{
        console.log(err.message)     
    }) 
function A(x){
  x('我是a调用的实参y');
}
A((y)=>{
  console.log(y)
})
    return {
      getRes,

    }
  },
}
</script>

<template>
<h2>{{getRes}}</h2>
</template>
