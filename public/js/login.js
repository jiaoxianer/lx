define(['jquery','cookie'],function($){
	//登录功能
	$('#loginBtn').click(function(){
            $.ajax({
                type:'post',
                url:'/api/login',
                data:$('#loginForm').serialize(),
                dataType:'json',
                success:function(data){
                    console.log(data)
                    if(data.code == 200){
                        //把用户的登录信息存储到cookie中，方便跨域获取数据
                        $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                        location.href = '/main/index';
                    }
                }
            });
            //阻止按钮的默认submit的自动跳转
            return false;
        });
})