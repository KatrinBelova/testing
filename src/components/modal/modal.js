import $ from 'jquery';

$('.footer__button').on('click', function(){
	$('.modal').css('display','block');
});

$('.modal__exit').on('click', function(){
	$('.modal').css('display','none');
});

$('.modal__button').on('click', function(){
	$('.modal').css('display','none');
});
