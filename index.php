<?php  

	header('Content-Type:text/html;charset=utf-8');

	//默认路径 目录名称
	$dir = 'main';
	//默认文件名称
	$filename = 'index';
	//$_SERVER PHP中的全局变量，是一个数组 在访问的时候在后面加东西会多出来一个属性PATH_INFO
	//数组提供的属性 判断PATH_INFO在$_SERVER这里是否存在
	//处理URL
	if(array_key_exists('PATH_INFO',$_SERVER)){
		//PATH_INFO属性存在
		//获取请求
		$path = $_SERVER['PATH_INFO'];//得到的结果/main/index
		// 去掉第一个斜杠
		$str = substr($path,1);
		//字符串分割，explode和js中的split方法很像
		$ret = explode('/',$str);//返回数组，有长度['main','index']
		if(count($ret) == 2){
			$dir = $ret[0];
			$filename = $ret[1];
		}else{
			// 其他情况全部跳转到登录页面
      		$filename = 'login';
		}
	}

	//嵌入子页面
	include('./views/'.$dir.'/'.$filename.'.html');

?>
