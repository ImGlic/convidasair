function selecionarResposta(resposta) {
    alert("Você selecionou: " + resposta);
    // Aqui você pode adicionar lógica adicional dependendo da resposta selecionada
}

function moverBotao(event) {
    // Gere coordenadas aleatórias para a posição do botão
    var posX = Math.random() * (window.innerWidth - this.offsetWidth);
    var posY = Math.random() * (window.innerHeight - this.offsetHeight);
    
    // Defina a nova posição do botão
    this.style.left = posX + "px";
    this.style.top = posY + "px";
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtenha a referência para o botão "NÃO"
    var botaoNao = document.getElementById("botaoNAO");
    
    // Adicione o event listener para mover o botão quando o mouse se mover sobre ele
    botaoNao.addEventListener("mousemove", moverBotao);
});


function enviarMensagem() {
    // Número de telefone e mensagem predefinida
    var numeroTelefone = "5521983117222";
    var mensagem = "Olá! Estou interessado em fazer cardio em casa.";

    // Abre o WhatsApp com o número e mensagem predefinidos
    window.open("https://wa.me/" + numeroTelefone + "?text=" + encodeURIComponent(mensagem));
}