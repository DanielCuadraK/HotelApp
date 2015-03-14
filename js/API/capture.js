//media capture

var capture = {
    imgSuccess: function(mf){
        var i, path, len;
        for (i = 0, len = mf.length; i < len; i += 1) {
            path = mf[i].fullPath; //Ruta completa del archivo de imagen
        }
        $('#registro div[role=main] a').attr('rel',path);
        $('#registro div[role=main] ul li:eq(4)').html('<img src="' + path + '" style="width:100%;">');
    },
    imgError: function(err) {
        navigator.notification.alert('Error code: ' + err.code, null, 'Capture Error');
    },
    takePhoto: function() {
        navigator.device.capture.captureImage(imgSuccess, imgError, {limit:2});
    }
};