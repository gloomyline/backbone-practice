define([
    'cards'
], function(C) {
    'use strict';
    var Controller = {
        init:function(){
            var c = new C()
            c.fetch()
            c.on('change',function(){
                console.log(c.models)
                new View({model:c.models})
            })
        }
    }
    
    return Controller
});