define(['jquery','backbone','text!tplDetail'],
function($,B,tpl){
    // 创建一个backbone的views视图
    var view = B.View.extend({
        /////视图绑定到的html节点
        el:$('body'),
        //// 获取页面中id为'indexView'节点的html数据
        // template:_.template($('#indexView').html()),
        template:_.template(tpl),
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
        }
    })
    return view
})