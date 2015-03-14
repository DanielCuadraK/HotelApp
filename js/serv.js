//Envío de datos al servidor

var serv = {
    //url: 'http://carlos.igitsoft.com/apps/test.php',
    sendData: function(nom, mail, tel, img){
        $.mobile.loading('show');
        /*$.ajax({method: "POST",url: serv.url,data: { nom: nom, mail: mail, tel: tel }}).done(function( msg ) {
            if(msg == 1)
                transfer.imgUpload(img);
        });*/
    }
};