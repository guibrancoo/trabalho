document.querySelector('#limpar').style.display = "none";
// document.querySelector('#numero').insertBefore("Nº do cartão:", before);
document.getElementById('meuH1').innerHTML = "Exibir dados do cartão";
document.getElementById('pesquisar').innerHTML = "Pesquisar cartão";
document.getElementById('limpar').innerHTML = "Limpar";
document.querySelector("body > h1 + form > p")
    .innerHTML = "Nº do cartão:";

document.forms.form.addEventListener("submit", iniciarBusca); //Função que ao enviar o form(submit), chama a função iniciarBusca