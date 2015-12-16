$(function(){
	//加入我们按钮切换
	$('.join-line input').each(function (index){
		$(this).on('click',function(){
			var con = $('.section-join-info .container');
			$('.join-line input').removeClass('clicked');
			$(this).addClass('clicked');
			con.removeClass('show');
			con.eq(index).addClass('show');
		});	
	});
	//招聘职位切换
	$('#job-box-ul li').each(function(index){
		$(this).on('click', function (){
			var con = $('#job-explain .hide');
			$('#job-box-ul li').removeClass('list-active');
			$(this).addClass('list-active');
			con.removeClass('show');
			con.eq(index).addClass('show');
		});
	});

	//西游记事滚动

	



})