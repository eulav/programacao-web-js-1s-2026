function transporMatriz(A){

    //imprimindo a matriz original
    for(let i = 0; i<A.length;i++){
        let linha = ""
        for(let j = 0;j< A[0].length;j++){
            linha += A[i][j] + "\t"
        }
        linha += "\n";
        console.log(linha);
    }

    //imprimindo a matriz transposta
    for(let i = 0; i<A[0].length;i++){
        let linha = ""
        for(let j = 0;j< A.length;j++){
            linha += A[j][i] + "\t"
        }
        linha += "\n";
        console.log(linha);
    }
}

let A = [
    [1,2],
    [3,4],
    [5,6]

];

transporMatriz(A);
