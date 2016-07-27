define([
    'backbone',
    'card'
], function(B, Model) {
    'use strict';
    var Collection = B.Collection.extend({
        model:Model,
        url:'/card',
        parse:function(res){
            // console.log(res)
            // 设置collection的数据
            this.set(res.data)
            return res.data
            // this.trigger('change')
        }
    })
    return Collection
});