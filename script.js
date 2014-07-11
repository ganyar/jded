



$(document).ready(function(){
	
	
	
	$("#first-menu").click(
		function (){
			
			$(".content").hide();
			//$("#first-content").show();
			
			$(".menu-item").removeClass("menu-item-selected");
			$("#first-menu").addClass("menu-item-selected");
			
			$("#first-content").velocity("transition.slideRightBigIn", { stagger: 200 });
		}
	);
	
	$("#second-menu").click(
		function (){
			$(".content").hide();
			//$("#second-content").show();
			$("#second-content").velocity("transition.slideRightBigIn", { stagger: 200 });
			$(".menu-item").removeClass("menu-item-selected");
			$("#second-menu").addClass("menu-item-selected");
		}
	);
	
	$("#third-menu").click(
		function (){
			$(".content").hide();
			//$("#third-content").show();
			$("#third-content").velocity("transition.slideRightBigIn", { stagger: 200 });
			$(".menu-item").removeClass("menu-item-selected");			
			$("#third-menu").addClass("menu-item-selected");

		}
	);
	
	
});
