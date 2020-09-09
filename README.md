项目总结:
    这个项目是模仿网易云音乐，实现了用户的登录，修改信息，音乐播放，搜索，mv播放，歌词轮播，显示评论等功能，在技术上使用了VUE作为框架语言，使用node作为后端。在技术上使用了VUEX+VUE-ROUTER进行了页面状态保存以及页面的路由跳转，用element-ui来构建页面结构,用axios来进行对后端接口的连接。
项目步骤:
1. 使用vue-cli4 创建vue项目
    vue create neteasecloudmusic   // 项目名不能包含大写

2. 使用 element ui
    npm i element-ui -S  
    npm install babel-plugin-component -D   按需加载
    在plugins中的element的文件下进行按需加载

3. 导入VUEX ，建立相应目录
    npm i vuex -s

4. 创建页面

5. 对路由进行配置，跳转到各个页面

6. 编写页面样式

7. 安装axios,获取后台的数据

8. 音乐、MV播放 (难点)

9. 进行性能优化

