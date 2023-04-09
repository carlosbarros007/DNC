
class Produto{ // cria a minha classe


    constructor(){  // função construtora

        this.id = 1; // inicia o id do produto
        this.armarioProdutos = []; // inicia o array que armazena os dados
    }

    
    Adicionar(){ //função que adiciona um novo produto 

        let produto = this.lerDados(); // chama a função lerDados
        
        if(this.validar(produto) == true){ // valida os dados

            this.salvar(produto);
        }

        this.listar(); // chama a função que mostra os dados para o usuario

        this.limpaCampo() // chama a função que limpa o input

    }

    lerDados(){
        
        let produto = {}; 

        produto.id = this.id;
        produto.nomeProduto = document.getElementById("produto").value;
        produto.preco = document.getElementById("valor").value;

        return produto;
    }

    validar(produto){

        if(produto.nomeProduto.length == 0 || produto.preco.length == 0){

            alert("verifique os dados!");
            
        }else{
            return true;
        }
    }

    salvar(dados){

        this.armarioProdutos.push(dados);
        this.id++;
    }

    listar(){

        let tabela = document.getElementById("tabela");
        tabela.innerText = '';

        for(let i = 0; i < this.armarioProdutos.length; i++){

            let linha = tabela.insertRow();
            let deleteicon = document.createElement('img');

            deleteicon.src = 'imagens/lixeira.png';
            
            
            let colunaID = linha.insertCell();
            let colunaNome = linha.insertCell();
            let colunaPreco = linha.insertCell();
            let colunaDell = linha.insertCell();

            colunaID.innerText = this.armarioProdutos[i].id;
            colunaNome.innerText = this.armarioProdutos[i].nomeProduto;
            colunaPreco.innerText = this.armarioProdutos[i].preco;
            colunaDell.appendChild(deleteicon);
            deleteicon.setAttribute('onclick', 'novoProduto.deletar('+this.armarioProdutos[i].id+')');
        }
    }

    limpaCampo(){
            let limpaNome = document.getElementById("produto");
            let limpaValor = document.getElementById("valor");

            limpaNome.value = '';
            limpaValor.value = '';
    }

    deletar(id){
        
       
        let tabela = document.getElementById("tabela");

        for(let i = 0; i < this.armarioProdutos.length; i++){

            if(this.armarioProdutos[i].id == id){

                this.armarioProdutos.splice(i , 1);
                tabela.deleteRow(i);
            }
        }
        
        alert("tudo deletado")
      
    }

}

var novoProduto = new Produto();
