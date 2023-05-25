function verificarRespostas2() {
    // Remove the previous error message, if any
    const mensagemErro = document.getElementById('mensagem-erro');
    if (mensagemErro) {
        mensagemErro.remove();
    }

    // Verifica as respostas
    const respostas = {
        pergunta1: 'b',
        pergunta2: 'b',
        pergunta3: 'a',
        pergunta4: 'd',
        pergunta5: 'c',
        pergunta6: 'd',
        pergunta7: 'c',
        pergunta8: 'c',
        pergunta9: 'c',
        pergunta10: 'a',
        pergunta11: 'a',
        pergunta12: 'b',
        pergunta13: 'c',
        pergunta14: 'c'
        // Add more answers for other questions
    };

    let todasRespostasCorretas = true;

    // Iterate through each question form and check the selected answer
    for (let i = 1; i <= Object.keys(respostas).length; i++) {
        const formId = 'pergunta' + i;
        const form = document.getElementById(formId);
        const resposta = form.querySelector('input[name="resposta' + i + '"]:checked');

        // Check if the answer is correct
        if (resposta && resposta.value !== respostas[formId]) {
            todasRespostasCorretas = false;
            form.classList.add('errada');
        } else if (resposta && resposta.value === respostas[formId]) {
            form.classList.remove('errada'); // Remove the "errada" class from the correct answer
        }
    }

    // Display the result message
    const resultado = document.getElementById('resultado');
    if (todasRespostasCorretas) {
        resultado.innerHTML = '<h2>Resultado</h2><p>Parabéns, você acertou todas as respostas!</p>';
    } else {
        resultado.innerHTML = '<h2>Resultado</h2><p>Você errou algumas respostas, tente novamente.</p>';
    }
    resultado.classList.remove('hidden');
}
