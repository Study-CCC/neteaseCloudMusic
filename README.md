1. 使用vue-cli4 创建vue项目
    vue create neteasecloudmusic   // 项目名不能包含大写

2. 使用 element ui
    npm i element-ui -S  
    npm install babel-plugin-component -D   按需加载
    在plugins中的element的文件下进行按需加载

<!-- 3. 解决跨域问题 -->
    





坑1： 动态引入图片路径要用require()
坑2:  element-ui中的row的offset要少用,尽量使用margin:0 auto;
坑3:  el-popover中的样式不应该写在包含它的盒子作用域下
坑4:  不要在dom元素里加index++等自增语句,会造成多次重复渲染
坑5:  background:url 要比background-position先写,否则会被覆盖

后续修改: 添加common组件playlistItem替换歌单和推荐里的item
          封装axios
          过滤器
          布局使用flex中的between