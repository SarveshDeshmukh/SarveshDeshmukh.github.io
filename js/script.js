(function(){
	//Variables
    var documentElem = $(document),
        projectVisibleContent = $('.project-visible-content'),
        projectExtraToggleBtn = projectVisibleContent.find('.project-extra-toggle'),
        nav = $('nav'),
        navigateElems = $('nav li a, .continue-btn'),
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