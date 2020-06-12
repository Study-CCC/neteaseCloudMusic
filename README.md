1. 使用vue-cli4 创建vue项目
    vue create neteasecloudmusic   // 项目名不能包含大写

2. 使用 element ui
    npm i element-ui -S  
    npm install babel-plugin-component -D   按需加载
    在plugins中的element的文件下进行按需加载

3. 创建页面

4. 对路由进行配置，跳转到各个页面

5. 编写页面样式

6. 安装axios,获取后台的数据
<!-- 3. 解决跨域问题 -->
    

监听路由变化
方法1:通过watch函数监听$route
方法2: 通过给router-view添加key
<router-view :key='key'></router-view>
        computed:{
            key(){
                return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
            }
        }
方法三：通过 vue-router 的钩子函数 beforeRouteEnter beforeRouteUpdate beforeRouteLeave

watch函数中的 deep:true, 用来监制对象内部值的变化

通过href="#" 可以直接到最顶部

坑1： 动态引入图片路径要用require()
坑2:  element-ui中的row的offset要少用,尽量使用margin:0 auto;
坑3:  el-popover中的样式不应该写在包含它的盒子作用域下
坑4:  不要在dom元素里加index++等自增语句,会造成多次重复渲染
坑5:  background:url 要比background-position先写,否则会被覆盖
坑6:  el-table有专门的属性设置值
坑7:  line-height要写在font-size下面才有用
坑8:  如果下面定义数据在dom中使用detail.a.b会报错,因为数据是从服务器请求回来的，而且里面也存在a，因为是异步请求，然而在页面初步渲染的时候是获取不到a的
data() {
    return {
      detail:{},
    }
坑9: 父组件中异步获取的数据直接传给子组件的话,可能还没获取到，子组件就已经渲染出来了。父组件异步传给子组件的方法：
   <childCom v-if="data" :data="data"></childCom>
坑10: 在router.js中填写路由信息,不能写components,要写component
后续修改: 添加common组件playlistItem替换歌单和推荐里的item
          封装axios
          过滤器
          布局使用flex中的between