define([
    'cards',
    'listView'
], function(C,View) {
    'use strict';
    var Controller = {
        init:function(){
            var c = new C()
            c.on('reset',function(){
                console.log(c.models)
                new View({collection:c})
            })

            // 设置reset为true才能触发collection的reset事件
            c.fetch({reset : true})
        }
    }
    
    return Controller
});