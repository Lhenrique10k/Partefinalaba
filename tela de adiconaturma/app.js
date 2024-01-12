function handleKeyPress(event) {
    if (event.key === "Enter") {
        realizarPesquisa();
    }
}

function realizarPesquisa() {
    var termoPesquisa = document.getElementById('searchInput').value;

    // Simulação o redirecionamento para  página de resultados 
    window.location.href = 'resultados.html?q=' + encodeURIComponent(termoPesquisa);
}
