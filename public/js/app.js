(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
			
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);





var d=new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("today").innerHTML = days[d.getDay()];
var x=d.getDate();
document.getElementById('todate').innerHTML=x+' '+months[d.getMonth()];
document.getElementById("today1").innerHTML=days[(d.getDay()+1)%7];
document.getElementById("today2").innerHTML=days[(d.getDay()+2)%7];
document.getElementById("today3").innerHTML=days[(d.getDay()+3)%7];
document.getElementById("today4").innerHTML=days[(d.getDay()+4)%7];
document.getElementById("today5").innerHTML=days[(d.getDay()+5)%7];
document.getElementById("today6").innerHTML=days[(d.getDay()+6)%7];




