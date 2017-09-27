define(['jquery','template','util'],function($,template,util){
	//console.log(location.search)
	//在list页面添加tc_id 根据tc_id是否存在，来实现添加也页面和编辑页面共享，有tc_id 的就是编辑页面
	 var tcId = util.qs('tc_id');
    //console.log(tcId)
    if(tcId){
      //编辑操作
      $.ajax({
        type:'get',
        url :'/api/teacher/edit',
        data:{tc_id : tcId },
        dataType:'json',
        success:function(data){
          //解析数据渲染页面
          data.result.operate = '编辑讲师';
          var html = template('teacherTpl',data.result);
          $('#teacherInfo').html(html);
          //处理表单提交
          submitForm('/api/teacher/update');
        }
      })
    }else{
      //添加操作
      var html = template('teacherTpl',{operate:'添加讲师'});
      $('#teacherInfo').html(html);
      submitForm('/api/teacher/add');
    }

    //实现表单提交
   function submitForm(url){
      $('#teacherBtn').click(function(){
      	console.log($('#teacherForm').serialize())
        $.ajax({
          type:'post',
          url : url,
          data:$('#teacherForm').serialize(),
          dataType:'json',
          success:function(data){
          	console.log(1)
            if(data.code == 200){
              location.href = '/teacher/list';
            }
          }
        });
      });
    };
});