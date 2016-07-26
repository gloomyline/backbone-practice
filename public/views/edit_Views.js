define(['jquery','backbone'],function($,B){
    var View = B.View.extend({
        el:$('form'),
        initialize:function(){
            console.log('edit View initialized ...')
            this.render()
            // 监听model的验证事件，当模型数据改变的时候
            this.listenTo(this.model,'invalid',this.validatedHandle)
        },
        render:function(){
            // 把this.model中的数据填写在表单内容中
            // this.$('input[name="name"]').val(this.model.get('name'))
            var temModel = this.model;   //把this.model暂存
            this.$('input[type="text"]').each(function(){
                // 此处的this
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
            var arr = this.$el.serializeArray(); // [{"name":"name","value":""},{"name":"title","value",""}]
            
            // 使用underscore的reduce方法，处理表单数据
            var data = _.reduce(arr,function(preVal,curVal){
                preVal[curVal.name] = curVal.value
                return preVal
            },{})
            this.model.set(data)
            console.log('------------------')
            if(this.model.isValid()){
                this.model.save()  
                window.location.href = 'index.html'
            }
            else{

            }
            
        }
    })
    return View
})