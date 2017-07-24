// JavaScript Document

$(document).ready(function(){
	"use strict";
	
	var nav = $('nav');
	$('.btn-mobile').click(function(){
		nav.slideToggle();
	});
	
	$(window).resize(function(){
		if($(window).width() >= 720){
			nav.show();
		}else{
			nav.hide();
		}
	});
	
	$('.row-work a').hover(function(){
		$(this).find('.img-activ').stop().fadeIn();
		$(this).find('h3').stop().fadeOut();
	},function(){
		$(this).find('.img-activ').stop().fadeOut();
		$(this).find('h3').stop().fadeIn();				   
	});
});