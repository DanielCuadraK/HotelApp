//$(document).ready(function(){
var sqlData = {
	getSQLData: function(){
    var output = $('#output');
	$.ajax({
		url: 'http://www.elterreno.com.mx/sicop/connect.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var movie = '<h1>'+item.name+'</h1>'
				+ '<p>'+item.latitude+'<br>'
				+ item.longitude+'</p>';
				
				output.append(movie);
			});
		},
		error: function(){
			output.text('There was an error loading the data.');
		}
	});
}
};