$(document).ready(function (event) {
	$(".h1 span").click(function(event){
		$(".menu-warp").addClass("menu-slide");
	});
	$(".menu-warp div:nth-child(1) span").click(function(event){
		$(".menu-warp").removeClass("menu-slide");
	});

	$("a[data-panel]").click(function(event){
		event.preventDefault();
		if($(window).width() > 769)
			$(".content-wrap").empty().html("<div class='panel panel-default'>"+$($(this).attr("data-panel")).html()+"</div>");
		else
			$($(this).attr("data-panel")).slideToggle();
	});
});