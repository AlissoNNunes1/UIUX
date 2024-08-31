document.addEventListener('DOMContentLoaded', () => {
    // Simulação de dados dinâmicos
    const healthData = {
        bpm: 85,
        colesterol: 180,
        glicemia: 95,
        calcio: 9.5
    };

    // Atualiza os valores no DOM
    document.getElementById('bpm-value').textContent = healthData.bpm;
    document.getElementById('colesterol').textContent = `Colesterol: ${healthData.colesterol}`;
    document.getElementById('glicemia').textContent = `Glicemia: ${healthData.glicemia}`;
    document.getElementById('calcio').textContent = `Cálcio: ${healthData.calcio}`;
});