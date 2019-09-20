//头部小三角js
$('#top .myjiu').mouseenter(function(){
	$(this).find('.jiuxian').css({'transform':'rotate(180deg)','margin-left':'-2px','margin-top':'7px'});
	$(this).find('.jiuxiantop').css({'backgroundColor':'#fff','color':'#f00'});
	$(this).find('.jiuxiandown').show().css({'color':'#f00'});
});

$('#top .myjiu').mouseleave(function(){
	$(this).find('.jiuxian').css({'transform':'rotate(0deg)','margin-left':'3px','margin-top':'3px'});
	$(this).find('.jiuxiantop').css({'backgroundColor':'#f2f2f2'});
	$(this).find('.jiuxiandown').hide();
});
$('#top a:not(#shouji)').mouseenter(function(){
	$(this).css({'color':'#f00','textDecoration':'underline'});
});
	$('#top a:not(#shouji)').mouseleave(function(){
	$(this).css({'color':'#666','textDecoration':'none'});
});

//左侧导航
$('.div3 .left-menu').mouseenter(function(){
	$(this).css({'background':'#eee'});
	$(this).find('#right-nav').show();
	$('#right-nav').not($(this).find('#right-nav')).hide();
});

$('.div3 .left-menu').mouseleave(function(){
	$(this).find('#right-nav').hide();
	$(this).css({'background':'#fff'});
});

// 中间幻灯片
(function(){
	$(".navppt .paging").show();  
	$(".navppt .paging a:first").addClass("active");  
	var num=$('.navppt .paging a:first').attr('rel');
	var arr=[1,2,3,4,5,6,7,8,9];
	var imgs=arr.slice((num-1)*3,num*3);

	for(var i=0;i<imgs.length;i++){
		$('.'+imgs[i]).show();
	}
	 
	//Get size of the image, how many images there are, then determin the size of the image reel.  
	var imageWidth = $(".navppt .window").width();  
	var imageSum = $(".navppt .image_reel img").size();  
	var imageReelWidth = imageWidth * imageSum;  
	   
	//Adjust the image reel to its new size  
	$(".navppt .image_reel").css({'width' : imageReelWidth});   

	// 第二步
	//Paging  and Slider Function  
	var rotate = function(end){  
		if(end){
			var triggerID = imageSum - 1; //Get number of times to slide  
			var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
			
			$(".navppt .paging a").removeClass('active'); //Remove all active class  
			$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
			
			//Slider Animation  
			$(".navppt .image_reel").animate({  
				left: -image_reelPosition  
			}, 500 ,function(){
				$(this).css({'left':'0px'});
			});  
		}else{
			var triggerID = $active.attr("rel") - 1; //Get number of times to slide  
			var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
			
			$(".navppt .paging a").removeClass('active'); //Remove all active class  
			$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
			
			//Slider Animation  
			$(".navppt .image_reel").animate({  
				left: -image_reelPosition  
			}, 500 );  
		}
		  
		  var act=$('.navppt .paging a.active').attr('rel'); 

		  var imgs=arr.slice((act-1)*3,act*3);

		  for(var i=0;i<imgs.length;i++){
			  $('.'+imgs[i]).show();
		  }
	};   
	   
	//Rotation  and Timing Event  
	var rotateSwitch = function(){  
			play = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
			$('.navppt .img').hide();
			$active = $('.navppt .paging a.active').next(); //Move to the next paging  

			var rel=$('.navppt .paging a.active').attr('rel');

			if(rel==3) { //If paging reaches the end...  
				$active = $('.navppt .paging a:first'); //go back to first  
				var end=true;
			}else{
				var end=false;
			}
			rotate(end); //Trigger the paging and slider function  
		}, 5000); //Timer speed in milliseconds (7 seconds)  
	};  
	   
	rotateSwitch(); //Run function on launch   

	// 第三步
	//On Hover  
	$(".navppt .image_reel a").hover(function() {  
		clearInterval(play); //Stop the rotation  
	}, function() {  
		rotateSwitch(); //Resume rotation timer  
	});   
	   
	//On Click  
	$(".navppt .paging a").mouseenter(function() {  
		$('.navppt .img').hide();
		$active = $(this); //Activate the clicked paging  

		var act=$(this).attr('rel'); 

		var imgs=arr.slice((act-1)*3,act*3);

		for(i=0;i<imgs.length;i++){
			$('.'+imgs[i]).show();
		}

		//Reset Timer  
		clearInterval(play); //Stop the rotation  
		rotate(false); //Trigger rotation immediately  
		rotateSwitch(); // Resume rotation timer  
		return false; //Prevent browser jump to link anchor  
	});
})();


//疯狂抢购标签页效果
$('.indexTabBoxBottom .indexTabCon').first().show();

$('.indexTabBoxTop ul li').mouseenter(function(){
	$(this).addClass('active');
	$('.indexTabBoxTop ul li').not($(this)).removeClass('active');

	idx=$(this).index('.indexTabBoxTop ul li');

	$('.indexTabBoxBottom .indexTabCon').eq(idx).show();
	$('.indexTabBoxBottom .indexTabCon').not($('.indexTabBoxBottom .indexTabCon').eq(idx)).hide();
});

$('.indexTabRight .indexTabNewCon').first().show();

$('.indexTabRight .indexTabNewNav ul li').mouseenter(function(){
	$(this).addClass('active');
	$('.indexTabRight .indexTabNewNav ul li').not($(this)).removeClass('active');

	idx=$(this).index('.indexTabRight .indexTabNewNav ul li');

	$('.indexTabRight .indexTabNewCon').eq(idx).show();
	$('.indexTabRight .indexTabNewCon').not($('.indexTabRight .indexTabNewCon').eq(idx)).hide();
});
//疯狂抢购右侧第一个幻灯片
	// 幻灯片变量
	(function(){
		$(".indexTuanBox .paging").show();  
		$(".indexTuanBox .paging a:first").addClass("active");  
		   
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".indexTuanBox .window").width();  
		var imageSum = $(".indexTuanBox .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  

		//Adjust the image reel to its new size  
		$(".indexTuanBox .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".indexTuanBox .paging a").removeClass('active'); //Remove all active class  
				$active2.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".indexTuanBox .image_reel").animate({  
				    left: -image_reelPosition  
				}, 600 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active2.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".indexTuanBox .paging a").removeClass('active'); //Remove all active class  
				$active2.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".indexTuanBox .image_reel").animate({  
				    left: -image_reelPosition  
				}, 600 );  
			}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
			// clearInterval(play2);
		    play2 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		        $active2 = $('.indexTuanBox .paging a.active').next(); //Move to the next paging  
		        var rel=$('.indexTuanBox .paging a.active').attr('rel');

		        if ( rel==2) { //If paging reaches the end...  
		            $active2 = $('.indexTuanBox .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 4000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".indexTuanBox .image_reel a").hover(function() {  
		    clearInterval(play2); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".indexTuanBox .paging a").click(function() {  
		    $active2 = $(this); //Activate the clicked paging  
		    //Reset Timer  
		    clearInterval(play2); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();



//疯狂抢购右侧第二个幻灯片
(function(){
	$(".indexAdFocus .paging").show();  
	$(".indexAdFocus .paging a:first").addClass("active");  
		 
	//Get size of the image, how many images there are, then determin the size of the image reel.  
	var imageWidth = $(".indexAdFocus .window").width();  
	var imageSum = $(".indexAdFocus .image_reel img").size();  
	var imageReelWidth = imageWidth * imageSum;  

	//Adjust the image reel to its new size  
	$(".indexAdFocus .image_reel").css({'width' : imageReelWidth});   

	// 第二步
	//Paging  and Slider Function  
	var rotate = function(end){  
		if(end){
			var triggerID = imageSum - 1; //Get number of times to slide  
			var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
			
			$(".indexAdFocus .paging a").removeClass('active'); //Remove all active class  
			$active3.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
			
			//Slider Animation  
			$(".indexAdFocus .image_reel").animate({  
					left: -image_reelPosition  
			}, 500 ,function(){
				$(this).css({'left':'0px'});
			});  
		}else{
			var triggerID = $active3.attr("rel") - 1; //Get number of times to slide  
			var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
			
			$(".indexAdFocus .paging a").removeClass('active'); //Remove all active class  
			$active3.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
			
			//Slider Animation  
			$(".indexAdFocus .image_reel").animate({  
					left: -image_reelPosition  
			}, 500 );  
		}
	};   
		 
	//Rotation  and Timing Event  
	var rotateSwitch = function(){  
		// clearInterval(play2);
			play3 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
					$active3 = $('.indexAdFocus .paging a.active').next(); //Move to the next paging  
					var rel=$('.indexAdFocus .paging a.active').attr('rel');

					if ( rel==2) { //If paging reaches the end...  
							$active3 = $('.indexAdFocus .paging a:first'); //go back to first  
							var end=true;
					}else{
						var end=false;
					}
					rotate(end); //Trigger the paging and slider function  
			}, 5000); //Timer speed in milliseconds (7 seconds)  
	};  
		 
	rotateSwitch(); //Run function on launch   

	// 第三步
	//On Hover  
	$(".indexAdFocus .image_reel a").hover(function() {  
			clearInterval(play3); //Stop the rotation  
	}, function() {  
			rotateSwitch(); //Resume rotation timer  
	});   
		 
	//On Click  
	$(".indexAdFocus .paging a").click(function() {  
			$active3 = $(this); //Activate the clicked paging  
			//Reset Timer  
			clearInterval(play3); //Stop the rotation  
			rotate(false); //Trigger rotation immediately  
			rotateSwitch(); // Resume rotation timer  
			return false; //Prevent browser jump to link anchor  
	});
})();

// 优惠推荐部分,轮播特效
(function(){
	var s=0;
	var v=-1200;
	// 设置指示灯
	function setDeng(s,v){
		n=s/v;
		$('.titlebox .rightNavBox span').eq(n).addClass('on');
		$('.titlebox .rightNavBox span').not($('.titlebox .rightNavBox span').eq(n)).removeClass('on');
	}
	// 优惠推荐 下方滚动特效
	$('.listWrap .raceRight').click(function(){
		s+=v;
		if(s<=-2400){
			s=-2400;
		}
		setDeng(s,v);
		$('.raceBoxs').stop().animate({'marginLeft':s+'px'},800);
	});
	$('.listWrap .raceLeft').click(function(){
		s-=v;
		if(s>=0){
			s=0;
		}
		setDeng(s,v);
		$('.raceBoxs').stop().animate({'marginLeft':s+'px'},800);
	});
	$('.titlebox .rightNavBox span').click(function(){
		$(this).addClass('on');
		$('.titlebox .rightNavBox span').not($(this)).removeClass('on');
		id=$(this).index('.titlebox .rightNavBox span');
		s=v*id;
		$('.raceBoxs').stop().animate({'marginLeft':s+'px'},800);
	});
})();

// 主题部分1楼的轮播图
(function(){
	var i=0;
	var liWidth=210;
	var liCount=3;
    var DURATION=500;
	var canClick=true;
	function moveTo(to){
		if(to==undefined) to=i+1;
		if(i==0){
	     if(to>i){
	       $('#whiteWine .spiritWrap .bigUl').addClass('transition');
	     }else{
	       $('#whiteWine .spiritWrap .bigUl').removeClass('transition');
	       $('#whiteWine .spiritWrap .bigUl').css('margin-left',-liCount*liWidth+'px');
	       setTimeout(function(){
	         moveTo(liCount-1);
	       },100);
	       return;
	     }
	    }
		i=to;
		console.log(to);
		$('#whiteWine .spiritWrap .bigUl').css('margin-left',-i*liWidth+'px');
		if(i==liCount){
			i=0;
			setTimeout(function(){
				$('#whiteWine .spiritWrap .bigUl').removeClass('transition');
				$('#whiteWine .spiritWrap .bigUl').css('margin-left','0px');
			},DURATION);
		}
		$('#whiteWine .spiritWrap .btnBg>em').eq(i).addClass('on').siblings().removeClass('on');
	}
	// $('#btn-right').click(function(){
	// 	move(1);
	// });
	// function move(n){
	// 	if(canClick){
	// 		moveTo(i+n);
	// 		canClick=false;
	// 		setTimeout(function(){
	// 			canClick=true;
	// 		},DURATION+100);
	// 	}
	// }
	// $('#btn-left').click(function(){
	// 	move(-1);
	// });
	var timer=setInterval(function(){
		moveTo();
	},3000);
	$('#whiteWine .spiritWrap .bigUl').mouseover(function(){
		clearInterval(timer);
	});
	$('#whiteWine .spiritWrap .bigUl').mouseout(function(){
		timer=setInterval(function(){
			moveTo();
		},3000);
	});
	$('#whiteWine .spiritWrap .btnBg').on('click','em',function(){
		if(canClick){
			if($(this).prop('className')!='on'){
				var i=$('#whiteWine .spiritWrap .btnBg>em').index($(this));
				moveTo(i);
			}
			setTimeout(function(){
				canClick=true;
			},500);
		}
	})
})();

//一楼主题下面部分 ,标签页效果
$(function(){
	$('#whiteWine .topTenBox .topTenNav').on('mouseenter','a',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var i=$('#whiteWine .topTenBox .topTenNav a').index($(this));
		$('#whiteWine .topTenCon .clearFix').eq(i).css('display','block').siblings().css('display','none');
	})
	// 酒仙底部
	$('.contentThree .titieBox ul').on('mouseenter','li',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var i=$('.contentThree .titieBox li').index($(this));
		// alert(i);
		$('.contentThree .titleSlider').stop().animate({'left':`${i*105}px`},500)
	});
	//酒仙底部鼠标移动图片特效
	$('.contentThree .logbox .logAll img').hover(
		function(){
			$(this).stop().animate({'margin-left':'-100px'},500);
		},
		function(){
			$(this).stop().animate({'margin-left':'0px'},500);
		}
	)
})









	





 

