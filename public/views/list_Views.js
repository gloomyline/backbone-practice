define([
    'jquery',
    'backbone'
], function($, B) {
    'use strict';
    var view = B.View.extend({
        el:$('body'),
        template:_.template($('#listView').html()),
        // 初始化调用
        initialize:function(){
            console.log('list view initialized ...')
            // 初始化时渲染视图
            this.render()
        },
        render:function(){
            // 处理传递过来的数据 为标准的json数据
            var arr = this.model.map(function(item){
                return item.toJSON()
            })
            this.$el.html(this.template({model:arr}))
        }
    })

    return view  
})