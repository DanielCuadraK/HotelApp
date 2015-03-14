// file transfer
var transfer = {
    imgSuccess: function (r) {
    if(r.response == 1) {
        $.mobile.loading('hide');    
        navigator.notification.alert('El registro de sus datos ha sido un éxito.', function(){
            window.location.href = '#home';
            },'Registro','Aceptar');
        }
    },
    imgError: function (error) {
    alert("An error has occurred: Code = " + error.code);
    },
    imgUpload: function(img){
        var options = new FileUploadOptions();
        options.fileKey = "foto"; //variable que va a recibir el servidor
        options.fileName = "Daniel";
        options.mimeType = "image/jpeg";
        
        var ft = new FileTransfer();
        ft.upload(img, serv.url, transfer.imgSuccess, transfer.imgError, options);
    }

};







