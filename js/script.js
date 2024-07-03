document.getElementById('diagnose-btn').addEventListener('click', function() {

    const form = document.getElementById('question');

    const sintomas = {
        fever: form.elements['fever'].value,
        cough: form.elements['cough'].value,
        headache: form.elements['headache'].value,
        sore_throat: form.elements['sore_throat'].value,
        muscle_pain: form.elements['muscle_pain'].value,
        fatigue: form.elements['fatigue'].value,
        breathing_difficulty: form.elements['breathing_difficulty'].value,
        nausea: form.elements['nausea'].value,
        loss_of_smell: form.elements['loss_of_smell'].value,
        loss_of_taste: form.elements['loss_of_taste'].value
    };

    // Variável inicial de diagnóstico
    let diagnostico = "Os sintomas não correspondem a uma doença conhecida.";

    // Lógica de diagnóstico com base nos sintomas selecionados
    if (sintomas.fever === 'yes' && sintomas.cough === 'yes' && sintomas.breathing_difficulty === 'yes') {
        diagnosis = "Você pode estar com COVID-19. Consulte um médico imediatamente.";
    } else if (sintomas.fever === 'yes' && sintomas.headache === 'yes' && sintomas.nausea === 'yes') {
        diagnosis = "Você pode estar com dengue. Consulte um médico.";
    } else if (sintomas.sore_throat === 'yes' && sintomas.cough === 'yes' && sintomas.muscle_pain === 'yes') {
        diagnosis = "Você pode estar com gripe. Descanse e se hidrate.";
    } else if (sintomas.fever === 'yes' && sintomas.fatigue === 'yes' && sintomas.loss_of_smell === 'yes') {
        diagnosis = "Pode ser COVID-19. Monitore seus sintomas e consulte um médico se necessário.";
    } else if (sintomas.cough === 'yes' && sintomas.breathing_difficulty === 'yes') {
        diagnosis = "Você pode estar com bronquite. Consulte um médico para avaliação.";
    } else if (sintomas.nausea === 'yes' && sintomas.loss_of_taste === 'yes') {
        diagnosis = "Pode ser uma infecção viral. Descanse e consulte um médico se os sintomas persistirem.";
    } else if (sintomas.fever === 'yes' && sintomas.muscle_pain === 'yes' && sintomas.nausea === 'yes') {
        diagnosis = "Você pode estar com leptospirose. Procure um médico imediatamente.";
    }

    // Exibir o diagnóstico em um alerta
    alert(diagnostico);

    // Limpar os campos do formulário
    form.reset();

});

window.addEventListener('scroll', function() {
    // Obter o elemento de navegação lateral
    var scrollLado = document.getElementById('scroll');
    // Obter a posição de scroll atual da janela
    var scrollPosition = window.scrollY;
    
    // Lógica para alterar a opacidade do elemento de navegação lateral baseado no scroll
    if (scrollPosition > 50) { 
        scrollLado.style.opacity = '0';
    } else {
        scrollLado.style.opacity = '1';
    }
});
