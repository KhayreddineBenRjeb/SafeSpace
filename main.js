var button=$("<button>publish<button>")
button.addClass("#publish")
$(".publish").click(function(){
array=[]
array.push($("#textarea").val())
$(".illPushH").append("<div>"+array[array.length-1]+"</div>")})
//comment