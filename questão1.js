const a=[1,2,3,4,5]
function mean(a){
    let soma=0
    for(let i=0; i<a.length; i++){
        soma+=a[i]
    }
    return soma/a.length
}
console.log(mean(a))