1. 浏览器端数据存储
    cokise 存储大小有限制 4K以内，存储时间可以自己设置
    sessionStorage 存储大小有限制 5M以内，存储时间为当次会话，当关闭时消失
    localStorage 存储大小有限制 5M以内，存储时间无限制，直到自己手动删除为止

2. BackBone结合nodejs实现一个简单的名片数据存储

    ```
    rest
        get      获取数据时候使用           /card/id
        post     新增数据的时候使用          /card
        put      修改数据的时候使用          /card/id
        delete   删除数据的时候使用          /card/id

    backbone
        model 中如果没有指定id的时候，使用save方法，执行的是post请求
            如果有id，调用save方法，执行的是put请求
            fatch       获取数据，执行get请求
            validate    模型中数据的验证信息
            invalid     为模型添加验证事件监听，当执行save的时候进行验证isValid(返回bool值)
            url         模型和服务器端交互的地址

    view 中如何关联model以及如何与页面中的html节点进行关联
        el          关联html中的节点
        events      为节点添加事件
        initialize  视图初始化的时候执行的方法
        在创建视图的时候(new ViewName({model:m}))    //把m的数据绑定到view中的model上
    ```