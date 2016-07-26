// require.config({
//     paths: {
//         // 文件使用时候的名字：文件路径
//         'jquery': '../libs/jquery',
//         'underscore': '../libs/underscore',
//         'backbone': '../libs/backbone',
//         'localStorage': '../libs/backbone.localStorage',
//         'edit_Views': '../views/edit_Views',
//         'card': '../models/card'
//     }
// })

// require(['edit_Views', 'card',], function (View, Model) {
//     // 当我们的model中
//     // id不存在的时候表示是新增，向服务器端坐post提交
//     // id存在的时候表示是修改，向服务器端坐put提交
//     var m = new Model()

//     // 新创建一个视图，传递一个模型数据进行
//     var view = new View({ model: m })
// })

define([
    'card',
    'edit_Views'
], function(Model, View) {
    'use strict';
    var Controller = {
        init:function(){
            var m = new Model()
            new View({model:m})
        }
    }

    return Controller
});

