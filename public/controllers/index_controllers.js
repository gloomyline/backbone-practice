// requirejs 的配置部分
require.config({
    paths:{
        // 文件使用时候的名字：文件路径
        'jquery':'../libs/jquery',
        'underscore':'../libs/underscore',
        'backbone':'../libs/backbone',
        'localStorage':'../libs/backbone.localStorage',
        'index_Views':'../views/index_Views',
        'card':'../models/card'
    }
})
// require([模块名字，模块名字2],function(在方法中使用的名字，在方法中使用时的名字){})
require(['index_Views','card'],function(View,Model){
    // 新创建一个model id为me
    var m = new Model()

    m.fetch({data:{id:'5795df405ec29ae418c64561'}});
    m.on('change',function(){
        // 新创建一个视图，传递一个模型数据进行
        var view = new View({model:m})
    })
    
})