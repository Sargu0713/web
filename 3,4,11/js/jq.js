window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log (scrolled);
  if (scrolled>1000){


$(".p1").toggle(  

        function() {  
            $("#slide").show("slide", { direction: "right" }, 500);  
        }  
    );
$(".p2").delay(1000).slideToggle("slow");


 $(".p4").delay(1000).slideToggle("slow");

  }



}

$('#wms').click(function() {
		 $("#zone").replaceWith('<iframe style="position:absolute; height:90px; width:555px" src="https://www.youtube.com/embed/_rDT2GIvh8Y" frameborder="0" allowfullscreen></iframe>');
	});