$(document).ready(function() {	
	
	
	
    $('.blind').tap(function() {
				
        $(this).toggleClass('blindSelected');						
					$(this).animate({top: '-=5px'},500);
	   				$(this).animate({top: '+=5px'},500);
		/*$(this).animate({
           height: '-=5px'
       },500);
	   $(this).animate({
           height: '+=5px'
       },500); */
    });
	

	
	  
});

$('.roomText').tap(function() {
		
		var numberOfBlinds = 4;
		var numItems = $('.blindSelected').length;
		
		
		if( numItems != numberOfBlinds ) {
			$( '.blind' ).each(function() {	
				if ($(this).hasClass('blindSelected'))	{ }	
				
				else {
					$(this).addClass('blindSelected');	
					//$(this).animate({height: '-=5px'},100);
	   				//$(this).animate({height: '+=5px'},100);
					 }
			
			});
		}
		
		
		if( numItems == numberOfBlinds ) {
				$( '.blind' ).each(function() {
					$(this).removeClass('blindSelected');
					//$(this).animate({height: '-=5px'},100);
	   				//$(this).animate({height: '+=5px'},100);				
				});			
		}

});