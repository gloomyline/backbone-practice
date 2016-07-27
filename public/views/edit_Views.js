define(['jquery','backbone'],function($,B){
    var View = B.View.extend({
        el:$('body'),
        template:_.template($('#editView').html()),
        initialize:function(){
            console.log('edit View initialized ...')
            this.render()
            // 监听model的验证事件，当模型数据改变的时候
            this.listenTo(this.model,'invalid',this.validatedHandle)

            // 对模型添加change事件
            this.model.on('change', function () {
                // window.location.href = 'index.html'
                console.log('changed')
            })
        },
        render:function(){
            this.$el.html(this.template(this.model.toJSON()))
            // 把this.model中的数据填写在表单内容中
            // this.$('input[name="name"]').val(this.model.get('name'))
            var temModel = this.model;   //把this.model暂存
            this.$('input[type="text"]').each(function(){
                /////此处的this表示当前遍历到的标签
                $(this).val(temModel.get($(this).attr('name')))
            })
            this.$('textarea').val(this.model.get('description'))
            
        },
        events:{
            // 'click #btnID':'submitHandle'
            'submit':'submitHandle'
        },
        validatedHandle:function(model,error){
            // console.log(model)
            // console.log(error)
            $('span').text('')
            this.$('span[for="'+error.attr+'"]').text(error.msg)
        },
        submitHandle:function(e){
            e.preventDefault()
            // this.model.set('name',this.$('input[name="name"]').val())
            // this.model.set('title',this.$('input[name="title"]').val())
    
            // this.$el.serialize();
            var arr = this.$('form').serializeArray(); // [{"name":"name","value":""},{"name":"title","value",""}]
            
            // 使用underscore的reduce方法，处理表单数据
            var data = _.reduce(arr,function(preVal,curVal){
                preVal[curVal.name] = curVal.value
                return preVal
            },{})
            this.model.set(data)
            console.log('------------------')
            if(this.model.isValid()){
                /***
                 * 写法一：
                 * this.model.save().done(function(res){
                 *  console.log(res)
                 * }).fail(function(err){
                 *  console.log(err)
                 * })
                 * 
                 * 写法二：
                 * this.model.save({
                 *  success:function(res){
                 *      console.log(res)
                 *  },
                 *  error:function(err){
                 *      console.log(err)
                 *  }
                 * })
                 */
                this.model.save()
                this.listenToOnce(this.model,'sync',function(){
                    window.location.href = 'index.html'
                })
                console.log('验证成功')
            }
            else{
                console.log('验证失败')
            }
        }
    })
    return View
})