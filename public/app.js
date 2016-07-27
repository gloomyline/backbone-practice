require.config({
    paths: {
        // 文件使用时候的名字：文件路径
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'localStorage': 'libs/backbone.localStorage',
        'editView': 'views/edit_Views',
        'indexView':'views/index_Views',
        'listView' : 'views/list_Views',
        'card': 'models/card',
        'cards' : 'models/cards',
        'router':'router',
        'indexController':'controllers/index_controllers',
        'editController':'controllers/edit_controllers',
        'newController' : 'controllers/new_controllers',
        'listController' : 'controllers/list_controllers',
        'text':'libs/text',
        'tplList':'tpl/list.html',
        'tplEdit':'tpl/edit.html',
        'tplDetail':'tpl/detail.html'
    }
})

require(['backbone', 'router',], function (B, router) {
    // 启动backbone的路由历史记录
    B.history.start();
})