
var screenWidth = window.innerWidth;
var verticalPosition = window.pageYOffset | document.body.scrollTop;


/**
* Event Listener for resizing the window to help ensure the menu is toggled correctly for the window size.
*/
window.addEventListener('resize', function(event){
	screenWidth = window.innerWidth;
	if(document.getElementById('menu').style.display != "inline"){
		if(screenWidth>=768){
			document.getElementById('menu').style.display = "inline";
		}
	}
	else{
		if(screenWidth<768){
			document.getElementById('menu').style.display = "none";
		}
	}
});

/**
* Changes the transparancy of the nav menu when the page is scrolled up or down.
* Has a few mini bugs, but gets the job done for the most part.
*/
navTransparencyChange = function(){
	screenWidth = window.innerWidth;
	var element = document.getElementById('newnavbar');
	if(screenWidth >=768){
		verticalPosition = window.pageYOffset | document.body.scrollTop;
		if(verticalPosition >=50){
			element.style.opacity = "1";
			element.style.filter  = 'alpha(opacity=100)';
			element.style.borderBottom= "1px solid white";
		}
		else{
			element.style.opacity = "0.6";
			element.style.filter  = 'alpha(opacity=60)';
			element.style.borderBottom= "none";
		}
	}
	else{
		element.style.opacity = "1";
		element.style.filter  = 'alpha(opacity=100)';
		element.style.borderBottom= "1px solid white";
	}
}

/**
* Toggles the menu on the click of the hamburger 'more' icon. Works via CSS/
*/
document.getElementById('show-menu').onclick = function(){
	console.log("clicked");
	if(document.getElementById('menu').style.display === "block"){
		document.getElementById('menu').style.display = "none";
	}
	else{
		document.getElementById('menu').style.display = "block";
	}
};


