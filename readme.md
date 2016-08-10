1. 浏览器端数据存储
    cokise 存储大小有限制 4K以内，存储时间可以自己设置
    sessionStorage 存储大小有限制 5M以内，存储时间为当次会话，当关闭时消失
    localStorage 存储大小有限制 5M以内，存储时间无限制，直到自己手动删除为止

2. angularjs结合nodejs实现一个简单的名片数据存储

    ```
    rest
        get      获取数据时候使用           /card/id
        post     新增数据的时候使用          /card
        put      修改数据的时候使用          /card/id
        delete   删除数据的时候使用          /card/id
    ```