
function passwordMatch()
{
	console.log($('#passwordBox').val() ==$('#confirmBox').val())
	if($('#passwordBox').val() ==$('#confirmBox').val())
	{
		$('#password-check').removeClass();
		$('#password-check').addClass('fa fa-check-circle-o password-check-passes');
		$('#join-submit-button').removeClass('grayed-out');
		console.log($('#join-submit-button')[0])
	}
	else
	{
		$('#password-check').removeClass();
		$('#join-submit-button').addClass('grayed-out');
		$('#password-check').addClass('fa fa-times-circle-o password-check-fails');
	}
}




$(document).ready( function() {
		$("#join-submit-button").click(function()
		{
			console.log($('#create-emailBox').val());
			console.log($('#create-passwordBox').val());
			console.log('submit');
			
			
		$.ajax({
			url: '/password_handler',
			method: 'POST',
			data: 
			{
				action: 'create',
				email: $('#create-emailBox').val(),
				password: $('#create-passwordBox').val()
			}
		}).done(function(resp) {
			console.log(resp);
		});
				
			
		})
		

		
		$('#passwordBox').keyup(function() {
			passwordMatch()
		})
		$('#confirmBox').keyup(function() {
			passwordMatch()
		})
		
		
		
	
	
})