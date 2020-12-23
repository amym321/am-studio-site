$(window).load(function(){
	$('.loader').fadeOut();
});


var visible = false;
var nav = $('#logo');

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
			// bodyScrollTop > 180

			if (screen.width < 641) {
				if (bodyScrollTop > 220){
					$('.navbar').addClass('white-background navbar-border');
					$('.navbar-nav>li>a, .navbar-brand').addClass('black-fill');
					$('.icon-bar').addClass('black-background');
					if (!visible) {
						nav.append('<a href="#cover"><img id="logo-black" class="navbar-logo logo-black" src="images/logos/logo10.png" alt="AM Studio Shopify Web Development Logo"></a>');
						$('#logo-white').remove();
						visible = true;
					} 
					
				}
				else {
					$('.navbar').removeClass('white-background navbar-border');
					$('.navbar-nav>li>a, .navbar-brand').removeClass('black-fill');
					$('.icon-bar').removeClass('black-background');
					if (visible) {
						nav.append('<a href="#cover"><img id="logo-white" class="navbar-logo logo-white" src="images/logos/logo9.png" alt="AM Studio Shopify Web Development Logo"></a>');
						$('#logo-black').remove();
						visible = false;
					}
				}
			}
			else {
				if (bodyScrollTop > 300){
					$('.navbar').addClass('white-background navbar-border');
					$('.navbar-nav>li>a, .navbar-brand').addClass('black-fill');
					$('.icon-bar').addClass('black-background');
					if (!visible) {
						nav.append('<a href="#cover"><img id="logo-black" class="navbar-logo logo-black" src="images/logos/logo10.png" alt="AM Studio Shopify Web Development Logo"></a>');
						$('#logo-white').remove();
						visible = true;
					} 
					
				}
				else {
					$('.navbar').removeClass('white-background navbar-border');
					$('.navbar-nav>li>a, .navbar-brand').removeClass('black-fill');
					$('.icon-bar').removeClass('black-background');
					if (visible) {
						nav.append('<a href="#cover"><img id="logo-white" class="navbar-logo logo-white" src="images/logos/logo9.png" alt="AM Studio Shopify Web Development Logo"></a>');
						$('#logo-black').remove();
						visible = false;
					}
				}
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


// parallax layers
window.addEventListener("scroll", function () {
    const topDistance = this.pageYOffset;
    const layers = document.querySelectorAll("[data-type='parallax']");
    layers.forEach(function (layer) {
        const depth = layer.getAttribute('data-depth');
        const movement = -(topDistance * depth);
        const translate3d = `translate3d(0, ${movement}px, 0)`;
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
    });
});

particlesJS("snowfall", {
	"particles": {
	   "number": {
		  "value": 1000
	   },
	   "shape": {
		  "type": "circle"
	   },
	   "size": {
		  "value": 2,
		  "random": true
	   },
	   "line_linked": {
		  "enable": false
	   },
	   "move": {
		  "enable": true,
		  "speed": 10,
		  "direction": "bottom",
		  "straight": true
	   }
	}
})()
