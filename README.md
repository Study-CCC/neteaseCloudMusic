1. 使用vue-cli4 创建vue项目
    vue create neteasecloudmusic   // 项目名不能包含大写

2. 使用 element ui
    npm i element-ui -S  
    npm install babel-plugin-component -D   按需加载
    在plugins中的element的文件下进行按需加载






坑1： 动态引入图片路径要用require()
坑2:  element-ui中的row的offset要少用