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

7. mv播放 (难点)

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
坑11: 通过axios发送请求会发送两次,一次为option,一次为正常请求
坑12: 通过watch观察对象,newValue和oldValue一样,因为它们索引同一个对象,vue不会保留修改之前的副本
坑13: 通过使用了elementUI组件,使用按键监听keyup之类的要用.native加在后缀才有用
坑14: 直接通过a[1]这种下标形式对数组进行操作不具有响应式,除了通过js中数组提供的方法来操作,可以实现js数组的响应式操作外, 在vue 模块中也为我们提供了方法, 通过这个方法,我们在vue中对数组的增删改查都可以实现响应式的效果
坑15: audio中currentTime 是以秒为单位的
坑16: 切换路由id时video组件中并不会重新加载，所以需要init一下video
坑17: 存储localStorage时,会将存入数据转换成字符串形式,我们可以使用JSON.stringify方法将json转换成json字符串
后续修改: 添加common组件playlistItem替换歌单和推荐里的item
          封装axios
          过滤器
          布局使用flex中的between
          detailPage中的djradio的type用vuex管理,传到common中related
          封装button
难点:  点击组件外时，让组件消失
        写音乐播放功能： 1. 手动拖动进度条改变播放时间
                        2. 播放暂停功能
                        3. 上一首下一首
                        4. 声音调节

关于vuex的使用要点:
    1.需要将state加入computed中,让state中数据具有响应式
    2. 不要在methods中直接修改state,这样VueDevTools检测不到