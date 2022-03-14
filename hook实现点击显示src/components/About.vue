<script>
import {reactive, ref} from 'vue' 
import usePoint from '../hooks/usePoint'
export default{
  name: 'About',
  setup(){
    let isShowPoint = ref(true)
    let point = usePoint()
    return { 
      isShowPoint,
      point     
    }
  },
}
</script>

<template>

<h1>当前坐标是{{point.x}},{{point.y}}</h1>
</template>

<style scoped>

</style>
