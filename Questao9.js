function resultado(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        if(aluno.nota >= 7){
            console.log(aluno.nome + ': '+ 'aprovado');
        }else{
            console.log(aluno.nome + ': '+ 'reprovado');
        }
    }
}

const alunos = [{ nome: 'Ana', nota: 8 },{ nome: 'Carlos', nota: 5 },{ nome: 'João', nota: 7 }];

resultado(alunos);