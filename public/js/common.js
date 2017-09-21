define(['jquery','template','cookie'],function($,tempalte){

	/*NProgress.start();
	NProgress.done();*/

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	//实现退出功能
	$('#logoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				//console.log(data)
				if(data.code == 200){
					//跳转到登录页
					location.href = '/main/login';
				}
			}
		})
	});

	//检测用户是否登录
	var flag = $.cookie('PHPSESSID');
	//这个属性是为了阻止在判断的时候PHPSESSID不存在，一直在刷新页面，加上location.pathname != '/main/login' 的时候
	//console.log(location.pathname);
	if(!flag && location.pathname != '/main/login'){
		//如果cookie不存在跳转到登录页
		location.href = '/main/login';
	}

	 //设置用户头像信息
	 //console.log($.cookie('loginInfo'));
	 var loginInfo = $.cookie('loginInfo');
   	 loginInfo = loginInfo && JSON.parse(loginInfo);
	 //$('.aside .profile img').attr('src',loginInfo.tc_avatar);
     //$('.aside .profile h4').html(loginInfo.tc_name);
     /*利用模板引擎做*/
     var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
     var html = tempalte.render(tpl,loginInfo);
     $('.aside .profile').html(html);

})