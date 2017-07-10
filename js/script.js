(function(){
	
	//Variables
	var documentElem = $(document),
		projectVisibleContent = $('.project-visible-content'),
		nav = $('nav');
		navigateElems = $('nav li a, .continue-btn'),
		htmlBody = $('html','body');
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

		navigateElems.on('click', function(e){
			var targetElem = $($(this).data('scroll-target'));
			console.log(targetElem);

			e.preventDefault();
		});
})();