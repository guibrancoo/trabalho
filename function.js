function iniciarBusca(){
    if(document.getElementById("numcartao").value == 12341234){
        alert('Cartão encontrado! Dados exibidos abaixo...');
        var div = document.querySelector('.cartao');
        div.innerHTML = "Cartão: " + document.getElementById("numcartao").value + "<br>Nome: GUILHERME D B PIRES" + "<br>CVV: 001" + "<br>Validade: 02/24";
    }else{
        alert('Cartão não encontrado! Tente novamente...');
        window.location.reload(); //Recarrega a página para que os dados não sejam mantidos
    }
}