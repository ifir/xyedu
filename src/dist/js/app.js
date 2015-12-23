$(function(){
	//首页面试笔试切换
	var mbList = new List({
		ele: $('#mb-btn input'),
		con: $('.list-box'),
		cur: 'clicked',
		showed: 'show'
	});
	//首页金牌名师自动切换事件
	var Index = 0;
	
	var timer2 = setInterval(function(){
			Index++;
			indexEach();
			if(Index > 1){
				Index = 0;	
				indexEach();
			}

		},5000);
	$('#index-btn span').each(function (index){
		$(this).on('click',function(){
			Index = index;
			indexEach();
		});	
	});

	function indexEach(){
		$('#index-btn span').removeClass('cur');
		$('#index-btn span').eq(Index).addClass('cur');
		$('.photo-box').removeClass('index');
		$('.photo-box').eq(Index).addClass('index');
	}
	//加入我们按钮切换	
	var joinList = new List({
		ele: $('.join-line input'),
		con: $('.section-join-info .container'),
		cur: 'clicked',
		showed: 'show'
	});
	//招聘职位切换
	var jobList = new List({
		ele: $('#job-box-ul li'),
		con: $('#job-explain .hide'),
		cur: 'list-active',
		showed: 'show'
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
	//资讯轮播图
	var _index1=1;

	$('.bannerBut ul li').click(function(){
		$(this).addClass('hover').siblings('li').removeClass('hover');
		_index1=$(this).index();
		$('.bannerCon .scroll').stop().animate({left:-_index1*1060},500);
	});

	//右边按钮
	$('.after img').click(function(){
		_index1+=1;
		if(_index1>5){
			_index1=1;
			$('.scroll').css('left','0px');
			$('.scroll').animate({left:-_index1*1060},500);
			$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
		}else{
			$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
			$('.scroll').animate({left:-_index1*1060},500);
		}
	});


	//左边按钮
	$('.before img').click(function(){
		_index1-=1;
		if(_index1<1){
			_index1=5;
			$('.scroll').css('left','-4240px');
			$('.scroll').animate({left:-_index1*1060},500);
			$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
		}else{
			$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
			$('.scroll').animate({left:-_index1*1060},500);
		}
	});
	//自动播放

	var timer3 = setInterval(function(){
		_index1+=1;
		if(_index1>5){
			_index1=1;
			$('.scroll').css('left','0px');
			$('.scroll').animate({left:-_index1*1060},500);
			$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
		}else{
			$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
			$('.scroll').animate({left:-_index1*1060},500);
		}

	},5000);
	//资讯列表切换
	var newsList = new List({
		ele: $('#news-ul li'),
		con: $('#news-con .hide'),
		cur: 'active',
		showed: 'show'
	});
	$('#news-ul').on('click', 'li', function(){
		var value = $(this).text();
		var spanTitle = $('#news-con h4 span');
		spanTitle.text(value);
	})
	$('#all-news-box a').on('click', function (){
		$('#all-news-box').hide();
		$('#news-detail').show();
	})
	$('#close-news, #news-ul li').on('click', function(){
		$('#all-news-box').show();
		$('#news-detail').hide();
	})
	
})

function List(opt){
	this.ele = opt.ele;
	this.con = opt.con;
	this.cur = opt.cur;
	this.showed = opt.showed;
	this.eachList();

}
List.prototype.eachList = function (){
	var _this = this;
	_this.ele.each(function (index){
		$(this).on('click',function(){
			var con = _this.con;
			_this.ele.removeClass(_this.cur);
			$(this).addClass(_this.cur);
			con.removeClass(_this.showed);
			con.eq(index).addClass(_this.showed);
		});	
	});
}