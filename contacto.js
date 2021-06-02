function printArray(array)
{
    var texto="";
    for (var i=1; i<array.length;i++)
    {
        texto+="- "+array[i]+"\n";
    }
    return texto;
}

function validar()
{
    var validado = true;
    const errores=[];
    
    const mailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const textpattern= /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    const numberpattern=/\d+/;    
    var dato = document.myform.nombre.value.trim();
        
        if(dato.length<3)
        {
            errores.push("el nombre debe ser tener al menos  3 letras");
            document.myform.nombre.focus();
            validado= false;
        }
        else if(!textpattern.test(dato))
        {
            errores.push('el nombre debe contener solo letras');
            document.myform.nombre.focus();
            validado = false;
        }
    dato = document.myform.apellido.value.trim();
        if(dato.length<3)
        {
            errores.push('el apellido debe ser tener al menos  3 letras');
            document.myform.apellido.focus();
            validado=  false;

        }
        else if(!textpattern.test(dato))
        {
            errores.push('el apellido debe contener solo letras');
            document.myform.apellido.focus();
            validado = false;
        }

    dato= document.getElementsByName("tel");
    if(dato[0].value.length<2)
    {
        errores.push('Complete el codigo de area');
            dato[0].focus();
            validado= false;
    }
    if(!numberpattern.test(dato[0].value))
    {
        errores.push('Ingrese solo numeros para el codigo de Area');
            dato[0].focus();
            validado= false;
    }
    if(dato[1].value.length<6)
    {
        errores.push('Complete el número de telefono');
            dato[1].focus();
            validado= false;
    }
    if(!numberpattern.test(dato[1].value))
    {
        errores.push('Ingrese solo numeros para el telefono');
            dato[1].focus();
            validado= false;
    }
    
    dato=document.getElementById("mail").value;
    if(dato.length<4 && !mailpattern.test(dato))
    {
        errores.push("Ingrese una casilla de mail válida");
        document.myform.mail.focus();
        validado= false;
    }
    dato=document.getElementById("mail").value;
    if(dato.length<4 && !mailpattern.test(dato))
    {
        errores.push("Ingrese una casilla de mail válida");
        document.myform.mail.focus();
        validado = false;
    }
    
    dato=document.getElementById("consulta").selectedIndex;
    if(dato==null||dato==0)
    {
        errores.push("Seleccione el motivo de su consulta");
        document.myform.consulta.focus();
        validado = false;
    }
    dato= document.myform.detalle.value;
    if(detalle.value.length<30)
    {
        errores.push("Escriba el detalle de su consulta su consulta");
        document.myform.detalle.focus();
        validado = false;
    }
    
    if(errores.length>0){
        alert(printArray(errores));
    }
    
    return validado;
}