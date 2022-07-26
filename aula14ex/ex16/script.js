function tabuada(){

var n1 = window.document.getElementById('valor')
var tab = window.document.getElementById('seltab')

if (n1.value.length == 0) {window.alert('[Error] Por favor. Digite um número.')
    } else { var n = Number(n1.value)
    tab.innerHTML = ``
    for(c=1; c<=10; c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }

    
    
    }


}
