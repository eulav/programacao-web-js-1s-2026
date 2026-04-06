

function adicionarNoEstoque(id,item,quantidade){
    estoque.push(id)
    estoque.push(item);
    estoque.push(quantidade);
}


function removerDoEstoque(id){
    let antepenultimaPosi = estoque.length-3
    for (let i=0;i<estoque.length; i++){
        if (estoque[i] == id){
            if(i==0){
                estoque.shift();
                estoque.shift();
                estoque.shift();

                /**for (let y=i; y<estoque.length;y++){
                    estoque[y]=estoque[y+1];
                estoque.shift(); */
            }
            }
            else if(i==antepenultimaPosi){
                estoque.pop();
                estoque.pop();
                estoque.pop();
            }
            else{
                estoque.splice(i,3);
                /*
                let tempId = estoque[i];
                let tempNome = estoque[i+1]
                let tempQtde = estoque[i+2]
            for (let y=i; y<estoque.length;y++){
                estoque[y]=estoque[y+3];
            }
            estoque[estoque.length-1] = temp;
            estoque.pop();
            */
            }
        }
    };

function listar (){
    for (let i=0;i<estoque.length; i++){
    console.log(estoque[i],".",estoque[i+1]," - ",estoque[i+2],"\n");
    i=i+2;
    }
};

function editar (id){

};

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