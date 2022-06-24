function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML= `<p> Agora são ${hora} horas.</p>`
    if(hora >=0 && hora <= 12){
        img.src = 'image/dia.png'// Bom DIa
        window.document.body.style.background = '#f2f239'
    }else if(hora >=12 && hora<= 18){
        img.src = 'image/tarde.png'// Boa Tarde
        window.document.body.style.background = '#cba920'
    }else{
        img.src = 'image/noite.png' // Boa Noite
        window.document.body.style.background = '#20227c'
    }

}