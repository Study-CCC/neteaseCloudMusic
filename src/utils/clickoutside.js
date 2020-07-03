const clickOutSide = '__clickOutSide__'
export default  {
    bind(el,binding,vnode){
        const handleDoc = (e)=>{
            // 判断活动元素是否在目标元素外面
            if(!vnode.context ||el.contains(e.target)) return;
            // 判断是否存在处理函数
            if(binding.expression) binding.value(e)
        }
        el[clickOutSide] = {
            handleDoc,
            methodName: binding.expression,
            bindingFn: binding.value
          }
        //   setTimeout(()=>{
            document.addEventListener('click',handleDoc)
        //   },0)
        
    },
    update(el,binding) {
        el[clickOutSide].methodName = binding.expression;
        el[clickOutSide].bindingFn = binding.value;
    },
    upbind(el){
        document.removeEventListener('click',el[clickOutSide])
    }
}