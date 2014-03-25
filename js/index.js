$(document).ready(function(){
	$("#photos").hide();
	$("#bonus").click(function(){
		$("#news").slideToggle();
		$("#photos").slideToggle();
	});
});