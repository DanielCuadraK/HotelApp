//$(document).ready(function(){
var sqlData = {
	getSQLData: function(){
    var output = $('#output');
    alert('Si entrè');
$.ajax({
            url: 'http://www.elterreno.com.mx/sicop/connect.php',
            dataType: 'json',
        }).done(function( data ) {
            alert(data.OriginalTitle[0]);
        });
    }
};
