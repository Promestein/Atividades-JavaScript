alunos = [
    {
        nome:"Gabriel",
        notas:[10,2,4]
    },
    {
        nome:"Heitor",
        notas:[4,5,1]
    },
    {
        nome:"Marcos",
        notas:[10,8,9]
    },
    {
        nome:"Maria",
        notas:[1,10,10]
    }
]

function ordenaAlunos(alunos){
    function compare(a,b){
        let mediaA=0
        let mediaB=0

        for(let i=0; i<a.notas.length; i++){
            mediaA+=a.notas[i]
        }
        for(let i=0; i<b.notas.length; i++){
            mediaB+=b.notas[i]
        }
        mediaA=mediaA/a.notas.length
        mediaB=mediaB/b.notas.length
        return (mediaA-mediaB)*-1
    }
    return alunos.sort(compare)

}

console.log(ordenaAlunos(alunos))