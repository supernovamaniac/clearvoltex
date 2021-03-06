// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require Chart.bundle
//= require chartkick
//= require jquery
//= require jquery_ujs
//= require materialize
//= require_tree .
$(document).ready(function(){
	$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
})

$(window).on('load', function(){
	$(".preloader-wrapper").delay(500).fadeOut("slow");
	$('#top').delay(1500).fadeIn("slow");
	setTimeout(function(){
		$('ul.tabs').tabs('select_tab', 'tab_id');
		$('.toc-wrapper').pushpin({top: $('.toc-wrapper').offset().top,
								   bottom: $('.toc-wrapper').offset().bottom,
								   offset: 100});
		$('.scrollspy').scrollSpy();
		$('.modal').modal();
	},1501);
 });


//note to self: find another way to load because i can't load pushpin and scrollspy without actually loading the window first