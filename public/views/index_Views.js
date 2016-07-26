define(['jquery','backbone'],function($,B){
    // 创建一个backbone的views视图
    var view = B.View.extend({
        el:$('body'),
        initialize:function(){
            console.log('index view initialized ...')
            this.render();
        },
        render:function(){
            // 渲染视图的内容
            this.$el.find('h1').html(this.model.get('name')+'<small>'+this.model.get('title')+'</small>')
            this.$('.addr').html(this.model.get('address'))
            this.$('.tel').html(this.model.get('phone'))
            this.$('.qq').html(this.model.get('qq'))
            this.$('.email').html(this.model.get('email'))
            this.$('aside p').html(this.model.get('description'))
        }
    })
    return view
})