define(['backbone','localStorage'],function(B){
    var Model = B.Model.extend({
        // localStorage:new B.LocalStorage('card'),
        urlRoot:'/card',
        defaults:{
            name:'',
            title:'',
            address:'',
            phone:'',
            qq:'',
            email:'',
            description:''
        },
        // backbone的模型验证方法
        validate:function(attrs,options){
            console.log(attrs)
            if(attrs.name.length<2){
                return {attr:"name",msg:"名字最小长度为2"}
            }
            if(!!!attrs.title.trim()){
                return {attr:"title",msg:"职位信息不能为空"}
            }
            if(!!!attrs.address.trim()){
                return {attr:"address",msg:"地址信息不能为空"}
            }
            if(attrs.phone.length<11){
                return {attr:"phone",msg:"手机号格式错误"}
            }
           
        },
        ////////执行服务器交互操作后的返回结果
        parse:function(res){
            console.log(res)
            // 设置模型的值，触发change事件
            this.set(res.data)
        }
    })
    return Model;
})