define(['backbone','indexController','editController','newController','listController'], 
function (B,indexController,editController,newController,listController) {
    var Router = B.Router.extend({
        // 定义路由信息
        // 路由地址：执行函数
        routes: {
            '' : 'index',
            'index': 'index',
            'edit/:id': 'edit',
            'new': 'new',
            'list':'list'
        },
        index: function () {
            // index 路由执行的时候
            indexController.init()
            // console.log('index')
        },
        edit: function (id) {
            // console.log(`edit ${id}`)
            editController.init(id)
        },
        new: function () {
            // console.log('new')
            newController.init()
        },
        list:function(){
            listController.init()
        }
    })
    var router = new Router()
    return router;
})