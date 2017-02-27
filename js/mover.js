

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
		if(window.location.hash=='#login')
		{
			loadPageAjax('/login');
		}
		else if(window.location.hash=='#join')
		{
			loadPageAjax('/index-body');
		}
		else if(window.location.hash=='#business')
		{
			loadPageAjax('/pages/coming-soon.html');
		}
		else if(window.location.hash=='#blog')
		{
			loadPageAjax('/pages/coming-soon.html');
		}
		else
		{
			loadPageAjax('/index-body');
		}

		initialLoad = true;
		console.log(initialLoad)
	}


	
	//link routing!
	$("#header-logo").click(function(e) {
		loadPageAjax('/index-body');		
	});
	
	$("#login-button").click(function(e) {
		loadPageAjax('/login');
	});

	$("#join-button").click(function(e) {
		loadPageAjax('/index-body');		
	});
	
	$("#business-button").click(function(e) {
		loadPageAjax('/pages/coming-soon.html');		
	});
	
	$("#blog-button").click(function(e) {
		loadPageAjax('/pages/coming-soon.html');		
	});	
	
})
