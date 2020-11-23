// animate on scroll attributed to github.com/michalsnik/aos
// navbar collapse and project card bootstrap codepens from M. Duran

var view = {
  displayProjects(projectType){
    var singleCards = document.getElementsByClassName('single-card');
    const cardsArray = Array.from(singleCards);

    cardsArray.forEach(function(card){
      if (!card.classList.contains(projectType)){
       card.classList.add("hide");
      }
      else{
        card.classList.remove("hide");
      }
    });
  },
	setUpEventListeners: function(){

		$(window).scroll(function(){
			var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (bodyScrollTop > 75){
				$('.navbar').addClass('white-background navbar-border');
				$('.navbar-nav>li>a, .navbar-brand').addClass('bootstrap-magenta');
				$('.icon-bar').addClass('bootstrap-background-color');
				$('.logo').addClass('logo-fill');
			}
			else{
				$('.navbar').removeClass('white-background navbar-border');
				$('.navbar-nav>li>a, .navbar-brand').removeClass('bootstrap-magenta');
				$('.icon-bar').removeClass('bootstrap-background-color');
				$('.logo').removeClass('logo-fill');
			}
		});
		/*Used to close responsive navbar automatically. When this jquery event
		method is not applied, have to manually close it after opening. Does not work for submenus.*/
		$('.navbar-collapse a').click(function(){
    	$(".navbar-collapse").collapse('hide');
		});

		//Performs a smooth page scroll to an anchor on the same page.
		$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	       window.location.hash = target;
	    });
		});

		$("#select-project-type").change(function(){
			var project_type = this.value;
			view.displayProjects(project_type);
		});
	}
};

view.setUpEventListeners();
