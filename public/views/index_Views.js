define(['jquery','backbone'],function($,B){
    // 创建一个backbone的views视图
    var view = B.View.extend({
        /////视图绑定到的html节点
        el:$('body'),
        //// 获取页面中id为'indexView'节点的html数据
        template:_.template($('#indexView').html()),
        //////初始化时候调用的方法
        initialize:function(){
            console.log('index view initialized ...')
            this.render();///初始化的时候渲染视图
        },
        render:function(){
            // this.template() 返回模节点中的字符串
            // console.log(this.template())
            // this.$el.html(this.template())
            this.$el.html(this.template(this.model.toJSON()))

            // // 渲染视图的内容
            // this.$el.find('h1').html(this.model.get('name')+'<small>'+this.model.get('title')+'</small>')
            // /////选择视图中的标签元素 进行赋值
            // this.$('.addr').html(this.model.get('address'))
            // this.$('.tel').html(this.model.get('phone'))
            // this.$('.qq').html(this.model.get('qq'))
            // this.$('.email').html(this.model.get('email'))
            // this.$('aside p').html(this.model.get('description'))
        }
    })
    return view
})