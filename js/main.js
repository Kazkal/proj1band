$(document).ready(function() {

    $("p").addClass("underline"); 
  	//$("img").addClass("border"); this works on index.html only

  	$("#gallery1").click(function(){  // When I click on <p> run this code
 		$("#gallery1").removeClass("image_to_back");
 		$("#gallery1").addClass("image_enlarge");
 		$("#gallery2").addClass("image_to_back");
        $("#gallery2").removeClass("image_enlarge");
        $("#gallery3").addClass("image_to_back");
        $("#gallery3").removeClass("image_enlarge");
        $("#gallery4").addClass("image_to_back");
        $("#gallery4").removeClass("image_enlarge");
        $("#gallery5").addClass("image_to_back");
        $("#gallery5").removeClass("image_enlarge");
 		 alert("figure - click");
 	});
 	$("#gallery1").mouseenter(function(){  // When I move the mouse over <p> run this code
	  	//$(this).z-index=100;
	  	alert("footer - mouseenter");
	 
	 });
  	
   	$("#gallery1").hover(function(){
        //$(this).z-index=100;
        alert("img - hover");
    });

//	$("a");  // selects all <a> link elements

//	$(".myClass");  // selects HTML elements with class "myClass"


//	$("#bigButton");  // selects HTML element with id "bigButton"

//	$("p a");  // returns all anchors that are descendants of paragraphs

//	$("ul").css("border","solid 1px #ccc"); //adds a border to all lists.

});

