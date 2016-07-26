require.config({
    paths: {
        // 文件使用时候的名字：文件路径
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'localStorage': 'libs/backbone.localStorage',
        'edit_Views': 'views/edit_Views',
        'index_Views':'views/index_Views',
        'card': 'models/card',
        'cards' : 'models/cards',
        'router':'router',
        'indexController':'controllers/index_controllers',
        'editController':'controllers/edit_controllers',
        'newController' : 'controllers/new_controllers',
        'listController' : 'controllers/list_controllers'
    }
})

require(['backbone', 'router',], function (B, router) {
    B.history.start();
})