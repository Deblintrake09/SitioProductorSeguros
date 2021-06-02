function clickImage(param)
    {
        var  info = document.getElementsByName("infodata");
        for(var i =0; i<info.length;i++)
        {
            info[i].style.display="none";
        }
        switch(param)
        {
            case 'agro':
                document.getElementById("agro").style.display="block";
                break;
            case 'ap':
                document.getElementById("ap").style.display="block";
                break;
            case 'auto':
                document.getElementById("auto").style.display="block";
                break;
            case 'hogar':
                document.getElementById("hogar").style.display="block";
                break;
            case 'art':
                document.getElementById("art").style.display="block";
                break;
            case 'vida':
                document.getElementById("vida").style.display="block";
                break;
        }
    }
