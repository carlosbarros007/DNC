function calcular(){

    const numeroTabuada = parseInt(window.document.getElementById("numero__tabuada").value);
    const numeroVezes = parseInt(window.document.getElementById("numero__vezes").value);
    const mostraResultado = window.document.querySelector('#mostraResultado');
    let resultado;

    if(numeroTabuada != 0){

        for(i = 0; i <= numeroVezes; i++){

            resultado = numeroTabuada * i;
            mostraResultado.innerHTML += `${numeroTabuada} * ${i} = ${resultado} <br>`;
            

        }
        
    }else{
        alert("verifique os campos e tente novamente");
    }

}