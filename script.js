function verificarRespostas(event) {
    event.preventDefault();

    const resposta1 = document.getElementById('pergunta1').value;
    const resposta2 = document.getElementById('pergunta2').value;
    const resposta3 = document.getElementById('pergunta3').value;
    const resposta4 = document.getElementById('pergunta4').value;

    // Remove a classe "blink" de todas as perguntas
    const perguntas = document.getElementsByClassName('pergunta');
    for (let i = 0; i < perguntas.length; i++) {
        perguntas[i].classList.remove('blink');
    }

    // Verifica se as respostas estão corretas
    if (resposta1 === '01/10/2022' && resposta2 === '24/12/2022' && (resposta3.toLowerCase() === 'porção') && (resposta4.toLowerCase() === 'anaianzy')) {
        // Exibe o resultado
        document.getElementById('resultado').classList.remove('hidden');
        document.getElementById('putaerro').classList.add('hidden');
    } else {
        // Exibe mensagem de erro e aplica o efeito de piscar na pergunta incorreta
        document.getElementById('putaerro').classList.remove('hidden');

        if (resposta1 !== '01/10/2022') {
            document.getElementById('pergunta1').value = '';
            document.getElementById('pergunta1').classList.add('blink');
        }
        if (resposta2 !== '24/12/2022') {
            document.getElementById('pergunta2').value = '';
            document.getElementById('pergunta2').classList.add('blink');
        }
        if (resposta3.toLowerCase() !== 'porção') {
            document.getElementById('pergunta3').value = '';
            document.getElementById('pergunta3').classList.add('blink');
        }
        if (resposta4.toLowerCase() !== 'anaianzy') {
            document.getElementById('pergunta4').value = '';
            document.getElementById('pergunta4').classList.add('blink');
        }
    }

    return false;
}
