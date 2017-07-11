$(window).load(function(){

	var current = $(window).scrollTop();
	$(window).scroll(function() {
		$(window).scrollTop(current);
	});
	$('.section').delay(10000).fadeOut(15000);

	$('#preloader').delay(10000).fadeOut(5000,function(){
		/*$('nav').css('opacity',1);*/
		$('nav, .social-head li , #section06 ').animate({
            opacity: 1
        }, 500);
 /*
		$('.social-head li').animate({
            opacity: 1
        }, 500);

		$('#section06').animate({
            opacity: 1
        }, 500);*/
        
  
		$(window).off('scroll');

	});  	 	

});

(function(){
				//Variables
	    var documentElem = $(document),
        projectVisibleContent = $('.project-visible-content'),
        projectExtraToggleBtn = projectVisibleContent.find('.project-extra-toggle'),
        nav = $('nav'),
        navigateElems = $('nav li a, .continue-btn-scroll'),
        htmlBody = $('html, body'),
        introBg = $('.intro');
        lastScrollTop = 0;

		//Nav toggle
		documentElem.on('scroll', function(){
			var currentScrollTop = $(this).scrollTop();
			if(currentScrollTop > lastScrollTop)
			{
				nav.addClass('hidden');
			}
			else
			{
				nav.removeClass('hidden');
			}
			lastScrollTop = currentScrollTop;
		});
        
         navigateElems.on('click', function(e) {
         	console.log(this);
        var targetElem = $( $(this).data('scroll-target') ),
            targetOffsetTop = targetElem.offset().top;
        
        htmlBody.animate({
            scrollTop: targetOffsetTop
        }, 400);
        e.preventDefault();
    	});

          documentElem.on('scroll',function(){
            var currentScrollTop = $(this).scrollTop();
           introBg.css('background-position', '50%' + -currentScrollTop/4 + 'px');
           e.preventDefault();
        });
})();