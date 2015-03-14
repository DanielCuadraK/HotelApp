var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false); //device ready es una función de phonegap que avisa cuando ya se terminó de cargar todas las librerías
    },
    init: function () {
        var x = false;
        if (!x)
            window.location.href = "#registro";
        $('#btTomaFoto').tap(capture.takePhoto);
        $('#btRegistrar').tap(fn.registrar);
    },
    registrar: function(){
        //var nombre = $('#registro input:eq(0)').val();
        //var email = $('#registro input:eq(1)').val();
        //var tel = $('#registro input:eq(2)').val();
        var nombre = $('#inNombre').val();
        var email = $('#inEmail').val();
        var tel = $('#inTel').val();
        var img = $('#btTomaFoto').attr('rel');
        
        if(nombre != '' && email != '' && tel != '' && img != '' && img != undefined){
            server.sendData(nombre, email, tel, img);
        }
        else
            navigator.notification.alert('Faltan de llenar algunos campos v2', null, 'Error de Datos', 'OK');
    }
};
$(fn.ready);
//window.addEventListener("load", fn.init, false); opción puro javascript
//var nobj = $(document); opción jquery
//nobj.ready(fn.init);