import $ from 'jquery';

$("input").focus(function(){
		$(this).css({"width": "120px", "border-bottom": "1px solid #6b6b6a", "transition": "all 0.15s linear"});
		$(".header__icon").css("display", "none");
});
$("input").blur(function(){
		$(this).css({"width": "60px", "border-bottom": "none"}).val('');
		$(".header__icon").css("display", "block");
});
