<script>
import {ref, reactive, toRefs} from 'vue' 
export default{
  name: 'App',
  setup(){
    let inputedMoney = reactive({a:"", b:"", c:"", n:""} ) //输入的值
    let outputMoneyArr = ref([])  //输出的多个值的嵌套数组，内部元素也为数组[ten, five, two]
    let isShow= ref(false)       //当有结果数据的时候，再展示结果列表
    let resultOnShow=ref('')      //页面显示的文字
    //这个方法应该是可以用计算属性来代替，但是我没想好。
    function calculator(a,b,c,n){
      // console.log(a,typeof(a))
      for(let i in [...Array(a+1).keys()]){
        for(let j in [...Array(b+1).keys()]){
          for(let k in [...Array(c+1).keys()]){
            // console.log('循环a',Number(a),i)
            if (i*10+j*5+k*2 === n){
              isShow.value = true
              resultOnShow.value = "能够凑齐" 
              outputMoneyArr.value.push([i, j, k])
              console.log(i,j,k)
            }
          }
        }
      }
      //增加一个判断：当输入为0时候，输出：没钱凑个p
      if((Number(a )===0 && Number(b) ===0 && Number(c)===0)){
          resultOnShow.value = "没钱凑个p"
          isShow.value = false
      } 
      // console.log('此时的arr',outputMoneyArr)
      return outputMoneyArr
    }
    //很重要一点，就是将两个函数分离，这是个点击事件的方法，在这个里面调用另一个计算方法，并输入实参。
    function calculate(){
      outputMoneyArr.value = []   //先清空上一次的结果，再运行
      calculator(inputedMoney.a,inputedMoney.b,inputedMoney.c,inputedMoney.n)
      if(outputMoneyArr.value.length===0){
        isShow.value = false
        resultOnShow.value = "凑不齐"
        if(Number(inputedMoney.a)===0 && Number(inputedMoney.b) ===0 && Number(inputedMoney.c)===0){
          resultOnShow.value = "没钱凑个p"
      } 
      }
    }
    return {
      ...toRefs(inputedMoney),
      outputMoneyArr,
      isShow,
      resultOnShow,
      calculator,
      calculate
    }
  },
}
</script>

<template>
<h2>题目：手头有10元、5元、2元的钞票若干张，如果给一个固定的需要支付的金额，请问这个金额能用手头的钱正好凑齐吗？另外有几种办法凑齐？</h2>
<!-- 此处用的v-model=“”必须是个空字符串，这样placeholder才能正确显示，如果是0则不可以显示。注意v-model绑定的是.number,绑定语法用了toRefs()调用的对象内属性 -->
  输入10元钱张数：<input text="text" placeholder="输入10元的张数" v-model.number ='a'>
  <br>
  输入5元钱张数：<input text="text" placeholder="输入5元的张数" v-model.number  ='b'>
    <br>
  输入2元钱张数：<input text="text" placeholder="输入5元的张数" v-model.number  ='c'>
    <br>
  输入需要支付的金额：<input text="text" placeholder="输入需要支付的总金额" v-model.number  ='n'>
  <hr>
  <button @click="calculate">计算</button>   
  <hr>
  <h1>结果是：{{resultOnShow}}  </h1>
  <br>
  <!-- 将控制显示内容的isShow放到列表上，而不是列表内部的li上。 -->
  <ul v-show="isShow">
    <!-- 用数组(其实是数组ref对象.value)的.length来取长度) -->
    <h3>有{{outputMoneyArr.length}}种方式，分别为：</h3>
    <!-- 由于输出的是数组，所以用列表遍历这个数组，在页面显示 -->
    <li  v-for="(arr,index) in outputMoneyArr" :key="index"> 
      <!-- index+1因为在页面显示的index是从0开始计数的 -->
      第{{index+1}}种方法：10元有{{arr[0]}}张，5元有{{arr[1]}}张，2元有{{arr[2]}}张
    </li>
  </ul>
</template>
