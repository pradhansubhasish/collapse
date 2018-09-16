$(document).ready(function(){
	$("#under").hover(function(){
	  $(".row").addClass( "underline");     //class underline is added ....

	});

    $(".row").click(function(){
        $(".new").slideToggle("slow");

    });
});

$(document).ready(function(){
	$("#under1").hover(function(){
	  $(".row1").addClass( "underline");     //class underline is added ....

	});
    $(".row1").click(function(){
        $(".new").slideUp("slow");
        $(".new1").slideToggle("slow");
        
    });
});

$(document).ready(function(){
	$("#under2").hover(function(){
	  $(".row2").addClass( "underline");     //class underline is added ....

	});

    $(".row2").click(function(){
        $(".new1").slideUp("slow");
        $(".new2").slideToggle("slow");


    });
});