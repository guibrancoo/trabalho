document.querySelector('#limpar').style.display = "none";
// document.querySelector('#numero').insertBefore("Nº do cartão:", before);
document.getElementById('meuH1').innerHTML = "Exibir dados do cartão";
document.getElementById('pesquisar').innerHTML = "Pesquisar cartão";
document.getElementById('limpar').innerHTML = "Limpar";

document.querySelector("body > h1 + form > p")
    .innerHTML = "Nº do cartão:";
function iniciarBusca(e){
    e.preventDefault();
    var numcartao = document.createElement("p");
    numcartao.innerHTML = "Número do Cartão:" + document.getElementById("numero").value;
    var nome = document.createElement("p");
    nome.innerHTML = "Nome: GABRIELA LIMA";
    var cvv = document.createElement("p");
    cvv.innerHTML = "CVV: 001";
    var valid = document.createElement("p");
    valid.innerHTML = "Valido até: 02/27";
    var dados = (numcartao.innerHTML + '<br>' + nome.innerHTML + '<br>' + cvv.innerHTML + '<br>' + valid.innerHTML);
    
    if(document.getElementById("numero").value == 12341234){
        var cartaovirtual = document.createElement("img"); 
        cartaovirtual.src = "/tp1/img/cartaonu.png"; 
        document.getElementById("cartao").appendChild(cartaovirtual); 
        cartaovirtual.style.margin = "10 0"
        cartaovirtual.style.width = 350;
        cartaovirtual.style.height = 200;
        //var cartaovirtual = document.querySelector('.cartao');
        //cartaovirtual.style.backgroundColor = "purple";
        //cartaovirtual.style.borderRadius = "1";
        var pesquisar = document.getElementById("pesquisar");
        pesquisar.style.display = "none";
        document.getElementById("dados").innerHTML = dados;
        document.querySelector('#limpar').style.display = "inline-block";
    }else{
        alert('Ops! Este cartão não foi encontrado em nosso sistema. Tente novamente...');
    }
}

document.forms.form.addEventListener("submit", iniciarBusca); //Função que ao enviar o form(submit), chama a função iniciarBusca