//let estoque = [];
/** 
function adicionarNoEstoque(item){
    estoque.push(item);
}

function removerDoEstoque(item){
    for (let i=0;i<estoque.length; i++){
        if (estoque[i] = item){
            for (let y=i; y<estoque.length;y++){
                estoque[y]=estoque[y+1];
            }
        }
    }

};

*/

/**let temp = item;
            for (let y=i; y<estoque.length;y++){
                estoque[y]=estoque[y+1];
            }
            estoque[estoque.length-1] = temp;
            estoque.pop(); */

/**function removerDoEstoque(item){
    let ultimaPosi = estoque.length-1
    for (let i=0;i<estoque.length; i++){
        if (estoque[i] == item){
            if(i==0){
                estoque.shift();
            }
            else if(i==ultimaPosi){
                estoque.pop();
            }
            else{
                let temp = item;
            for (let y=i; y<estoque.length;y++){
                estoque[y]=estoque[y+1];
            }
            estoque[estoque.length-1] = temp;
            estoque.pop();
            }
        }
    }
}; */

/**
function removerDoEstoque(id){
    let penultimaPosi = estoque.length-3
    for (let i=0;i<estoque.length; i++){
        if (estoque[i] == id){
            if(i==0){
                estoque.shift();
                estoque.shift();
                estoque.shift();

                /**for (let y=i; y<estoque.length;y++){
                    estoque[y]=estoque[y+1];
                estoque.shift(); 
            }
            }
            else if(i==penultimaPosi){
                estoque.pop();
                estoque.pop();
            }
            else{
                let temp = item;
            for (let y=i; y<estoque.length;y++){
                estoque[y]=estoque[y+1];
            }
            estoque[estoque.length-1] = temp;
            estoque.pop();
            }
        }
    } 
*/