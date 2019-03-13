// Calculator Functionality
$(document).ready(function(){
   $(".ops").click(function() {
      if($(".screen").text() === "0") $(".screen").val($(this).text());
      else $(".screen").val($(".screen").text() + $(this).text());
   });
});
