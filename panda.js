$(document).ready(function() {
	$(".panda").click(function() {
		var type = this.getAttribute("data-type") ;
		var tendance = this.getAttribute("data-tendance");

		if (type === null && tendance === null) {
		alert ("Tg");
	}
	else{
		alert("Le type est " + type + " . La tendance est " + tendance + " . ");
	}

});
});