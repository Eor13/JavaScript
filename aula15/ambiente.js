let num = [5,8,2,9,3]

console.log(num)
console.log(`O velor tem  ${num.length}`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

num[3] =6
num.push(7)
num.sort()
console.log(num)
console.log(`O quarto valor do vetor é ${num[4]}`)
var cur = num.indexOf(8)
if(cur== -1){
    console.log('O valor não encontrado!')
}else{
console.log(`O valor está na posição ${cur}`)
}