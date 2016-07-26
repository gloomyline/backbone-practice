define([
    'backbone',
    'card'
], function(B, Model) {
    'use strict';
    var Collection = B.Collection.extend({
        model:Model,
        url:'/card',
        parse:function(res){
            console.log(res)
            this.set(res.data)
            // return res.data
            this.trigger('change')
        }
    })
    return Collection
});