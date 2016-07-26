define(['backbone','indexController'], function (B,indexController) {
    var Router = B.Router.extend({
        // 定义路由信息
        // 路由地址：执行函数
        routes: {
            'index': 'index',
            'edit/:id': 'edit',
            'new': 'new'
        },
        index: function () {
            // index 路由执行的时候
            indexController.init()
            console.log('index')
        },
        edit: function (id) {
            console.log(`edit ${id}`)
        },
        new: function () {
            console.log('new')
        }
    })
    var router = new Router()
    return router;
})