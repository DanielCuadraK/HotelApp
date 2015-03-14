//Envío de datos al servidor

var serv = {
    url: 'http://carlos.igitsoft.com/apps/test.php',
    send: function(nom,mail,tel,img){
        $.mobile.loading( 'show' );
        $.ajax({
            method: "POST",
            url: serv.url,
            data: { nom: nom, mail: mail, tel: tel }
        }).done(function( msg ) {
            alert(msg);
            if(msg == 1)
                transfer.imgUpload(img);
        });
    }
};