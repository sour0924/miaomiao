/**弹窗js */
import vue from 'vue'
import MessageBox from './MessageBox';

//闭包
export var messageBox = (function(){
    var defaults = {//默认值
        title : '',
        content : '',
        cancel : '',
        ok : '',
        handleCancel : null,
        handleOk : null
    };

    var MyComponent = vue.extend(MessageBox);

    return function(opts){//配置参数
        for(var attr in opts){
            defaults[attr] = opts[attr];
        }

        //var MyComponent = vue.extend(MessageBox);

        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                title : defaults.title,
                content : defaults.content,
                cancel : defaults.cancel,
                ok : defaults.ok
            },
            methods : {
                handleCancel(){
                    //console.log(123)
                    defaults.handleCancel && defaults.handleCancel.call(this);//不能使用bind
                    document.body.removeChild(vm.$el);//点击之后消失
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);//不能使用bind
                    document.body.removeChild(vm.$el);//点击之后消失
                }
            }
        });

        //添加
        document.body.appendChild(vm.$el);
    }
})();

