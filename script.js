```javascript id="v8w5jp"
let pontos = 0;


function adicionarPontos(valor){

    pontos += valor;

    document.getElementById("pontos").innerHTML = pontos;

}



function resultadoFinal(){

    let resultado = document.getElementById("resultado");


    if(pontos >= 80){

        resultado.innerHTML =
        "🎉 Parabéns! Você construiu uma Fazenda Sustentável!";

    }


    else if(pontos >= 50){

        resultado.innerHTML =
        "👍 Bom trabalho, mas ainda pode melhorar.";

    }


    else{

        resultado.innerHTML =
        "⚠️ Sua fazenda precisa de práticas mais sustentáveis.";

    }

}




function gerarCertificado(){

    document.getElementById("certificado").innerHTML =
    "🏅 Certificado de Agricultor Sustentável Conquistado!";

}
