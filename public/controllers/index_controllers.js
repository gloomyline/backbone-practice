// // requirejs 的配置部分
// require.config({
//     paths:{
//         // 文件使用时候的名字：文件路径
//         'jquery':'../libs/jquery',
//         'underscore':'../libs/underscore',
//         'backbone':'../libs/backbone',
//         'localStorage':'../libs/backbone.localStorage',
//         'index_Views':'../views/index_Views',
//         'card':'../models/card'
//     }
// })
// // require([模块名字，模块名字2],function(在方法中使用的名字，在方法中使用时的名字){})
// require(['index_Views','card','backbone'],function(View,Model,B){
//     // 新创建一个model id为me
//     var m = new Model({id:'5795df405ec29ae418c64561'})

//     // 获取数据
//     // data是一个我做请求
//     // m.fetch({data:{id:'5795df405ec29ae418c64561'}});

//     // 地址为/card/id
//     m.fetch()
//     m.on('change',function(){
//         // 新创建一个视图，传递一个模型数据进行
//         var view = new View({model:m})
//     })
    
// })

define(['card','index_Views'],function(Model,View){
    var Controller = {
        init:function(){
            var m = new Model({id:'579706751d385844ae9cab70'})
            // 此操作是异步的
            m.fetch()
            // m 此处m值是空
            m.on('change',function(){
                console.log('-- 触发change事件后输出 --')
                new View({model:m})
            })
            console.log('-- 直接输出m的值 --')
            console.log(m.get('name'))
        }
    }
    return Controller;
})