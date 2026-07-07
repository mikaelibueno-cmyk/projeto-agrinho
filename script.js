```javascript id="x5n3fw"
let pontos = 0;


function adicionarPontos(valor){

    pontos += valor;

    document.getElementById("pontos").textContent = pontos;

}



function resultadoFinal(){

    let resultado = document.getElementById("resultado");


    if(pontos >= 80){

        resultado.textContent =
        "🎉 Parabéns! Você construiu uma Fazenda Sustentável!";

    }


    else if(pontos >= 50){

        resultado.textContent =
        "👍 Bom trabalho, mas ainda pode melhorar.";

    }


    else{

        resultado.textContent =
        "⚠️ Sua fazenda precisa de práticas mais sustentáveis.";

    }

}




function gerarCertificado(){

    document.getElementById("certificado").textContent =
    "🏅 Certificado de Agricultor Sustentável Conquistado!";

}
```
