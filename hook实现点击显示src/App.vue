<template>
<About v-if="isShowPoint"></About>
<button @click="isShowPoint = !isShowPoint">加载坐标显示开关</button>

</template>

<script>
import About from './components/About.vue'
import {ref} from 'vue'
export default{
  setup(){
    let isShowPoint = ref(true)
    return { 
      isShowPoint,   
    }
  },
  components:{About}
}
</script>



<style>

</style>
