$(function(){
	//首页金牌名师自动切换事件
	var Index = 0;
	
	var timer2 = setInterval(function(){
			Index++;
			indexEach();
			if(Index > 3){
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