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
        },
        events:{'click #btnDel':'doDeleteHandler'},
        doDeleteHandler:function(e){
            if(confirm('确认删除')){
                // 根据id获取需要删除的数据
                var id = $(e.target).attr('data-del')
                // underscore数据筛选
                var tem = _.filter(this.model,{id:id})
                if(tem.length>0){
                    // destroy 调用服务器端的delete方法
                    tem[0].destroy().done(function(res){
                        location.href = '/'
                    }).fail(function(err){
                        console.log(err)
                    })
                }
            }
        }
    })

    return view  
})