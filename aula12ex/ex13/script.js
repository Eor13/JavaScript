function verif(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('nascimento')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero ='Homem'
            if(idade>=0 && idade<=12){
                img.setAttribute('src', 'image/menino.png')
        }else if( idade < 21){
            img.setAttribute('src', 'image/adolescentem.png')
        }else if( idade <60){
            img.setAttribute('src', 'image/homem.png')
        }else{
            img.setAttribute('src', 'image/idoso.png')
        }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<=12){
                img.setAttribute('src', 'image/menina.png')
        }else if( idade <= 21){
            img.setAttribute('src', 'image/adolescentef.png')
        }else if( idade <60){
            img.setAttribute('src', 'image/mulher.png')
        }else{
            img.setAttribute('src', 'image/idosa.png')
        }
        }   
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign ='center'
        res.appendChild(img)
        }
        
    }