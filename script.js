const hora = new Date().getHours();
let saudacao;

if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

document.getElementById("mensagem-saudacao").innerText = saudacao;
function calcularEconomia() {
    const horas = document.getElementById("horas-manuais").value;
    const resultadoDiv = document.getElementById("resultado-calc");
    const msg = document.getElementById("msg-economia");

    if (horas > 0) {
        // Cálculo: estimamos que automações economizam 70% do tempo manual
        const economiaSemanal = (horas * 0.7).toFixed(1);
        const economiaAnual = (economiaSemanal * 52).toFixed(0);

        msg.innerHTML = `🚀 Com meus ecossistemas, você recuperaria cerca de ${economiaAnual} horas por ano! Isso equivale a ${(economiaAnual / 24).toFixed(0)} dias inteiros de vida livre.`;
        resultadoDiv.style.display = "block";
    } else {
        alert("Por favor, insira um número de horas válido.");
    }
}
function filtrar(categoria) {
    const itens = document.querySelectorAll('.item-servico');
    
    itens.forEach(item => {
        if (categoria === 'todos') {
            item.style.display = 'block';
        } else {
            // Se a seção contém a classe da categoria, mostra. Se não, esconde.
            if (item.classList.contains(categoria)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}
