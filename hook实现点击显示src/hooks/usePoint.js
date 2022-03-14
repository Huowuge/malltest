import {reactive,onMounted,onBeforeUnmount} from 'vue'   //首先引入，不要怕重复引入？
export default function(){     //导出时候别忘了是导出函数
    let point = reactive({x:0, y:0})    //内部直接用setup()内的写法，因为将来时在setup()内引用。这里设定一个坐标。
    function savePoint(event){    //设定一个方法，这个方法在被引入的模块里面用，而且要在其页面用savePoint方法调用。
        point.x = event.pageX    //event.pageX是js获取当前鼠标横坐标的内置函数
        point.y = event.pageY
        console.log(event.pageX, event.pageY)
    }
    onMounted(()=>{     //设定页面功能挂载时间。
        window.addEventListener("click", savePoint)   //学一下addEventListener()方法。
    })
    onBeforeUnmount(()=>{   //设定页面功能卸载时间。
        window.removeEventListener("click", savePoint)   //学一下removeEventListener()方法。
    })
    return point    //必须有返回值，因为这个hook的功能是获取一个数据
}