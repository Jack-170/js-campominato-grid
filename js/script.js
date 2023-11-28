// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// creo una funzione che mi generi la griglia 
function generateGrid() {
    const cellsContainer = document.querySelector(".cells-container .d-flex");

    // Creo una griglia di 100 celle
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement("div");
        // aggiungo le celle ai div
        cell.classList.add("cells");
        // aggiungo i numeri alle celle
        cell.textContent = i;
        // aggiungo i div(classe cells) al cellsContainer
        cellsContainer.appendChild(cell);
    }
}

// associo la funzione precedentemente creata al click del bottone 
document.addEventListener("click", 
    function() {
        const startButton = document.getElementById("startgame");
        startButton.addEventListener("click", generateGrid);
});

