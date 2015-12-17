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


	$('.apply').on('click', function (){
		var popup = $('.popup, .mask');
		if($('.popup').hasClass('show')){
			popup.removeClass('show');
		}else{
			popup.addClass('show');
		}
	})

	$('.mask, .close-btn').on('click', function (){
		var popup = $('.popup, .mask');
		popup.removeClass('show');
	})

	//西游记事滚动
	var listBox = $('#his-list-box');
	var num1=110;
	var timer=setInterval(function(){
		num1 -= 1;
		listBox.css('top',num1);	
		if(listBox.css('top') == '-1100px'){
			num1 = 110;
			listBox.css('top',num1);
		}
			
	},50);

	
})