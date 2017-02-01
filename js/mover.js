

function pageChanger(html)
{
	
		$("#page-container").animate({
			"opacity": 0.25
			}, 200, function() {
				$("#page-container").html(html)
				$("#page-container").animate({
					"opacity": 1.0
				}, 200, function()
				{
			
				})
			})
		
		
}
function loadPageAjax(url)
{
	$.ajax({
		url: url,
	}).done(function(resp) {
		pageChanger(resp);
	});
}

var initialLoad = false;

$(document).ready( function() {
	if(!initialLoad)
{
	loadPageAjax('/index-body');
	initialLoad = true;
	console.log(initialLoad)
}
	//link routing!
	console.log(initialLoad)

	
	
	$("#login-button").click(function() {
		loadPageAjax('/login');
	});
	$("#header-logo").click(function() {
		loadPageAjax('/index-body');
		
	})
})
