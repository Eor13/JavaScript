
function contar(){
var star = window.document.getElementById('inicio')
var end = window.document.getElementById('fim')
var passo = window.document.getElementById('intervalo')
var res = window.document.getElementById('res')

if (star.value.length == 0 || end.value.length == 0 || passo.value.length == 00) {
    res.innerHTML = ` Impossível contar.`
    //window.alert('[Error] Faltam dados')
}else{
    res.innerHTML = 'Contando <br>'
    var i = Number(star.value)
    var f = Number(end.value)
    var p = Number(passo.value)
    var c = i
    if (p <= 0){
        window.alert('Passo inválido! Considere o PASSO como 1')
        p = 1
    }

    if(i<f){
        //Contagem crescente
    do{
        res.innerHTML+= `${c}\u{1F449}`
        c+= p
    }while(c<=f)
    }else{
        //Contagem Descrescente
        do{
            res.innerHTML +=`${c} \u{1f449}`
            c-=p
        } while(c>=f)
    }
    res.innerHTML += ` &#x1F3C1;`
}


}
