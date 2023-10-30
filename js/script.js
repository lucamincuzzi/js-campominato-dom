// Codice di esecuzione
const playButton = document.querySelector(".play");
playButton.addEventListener("click", function() {
  const difficultyLevel = document.querySelector(".challenge-selection").value;
  console.log(difficultyLevel);
  let number = 0;
  // eseguo un controllo basato sulla difficoltà impostata nel select
  // cambio di conseguenza il numero parametro della funzione generatrice delle celle a seconda dell'esito
  if (difficultyLevel === "easy") {
    number = 100;
  } else if (difficultyLevel === "hard") {
    number = 81;
  } else {
    number = 49;
  }
  // console log del numero risultante del controllo
  console.log(number);
  // catturo l'elemento HTML della griglia
  const grid = document.querySelector(".grid");
  // lo rendo visibile in pagina
  grid.classList.remove("hidden");
  // resetto il suo contenuto per evitare di accumulare griglie
  grid.innerHTML = "";
  // genero e inserisco le celle mediante la funzione
  generateCells(number);
})

/******/
// Funzioni
/**
 * Dato un numero, la funzione genera tramite ciclo for elementi div con al loro interno numeri da 1 a x in successione, aggiunge loro un event listener e li inserisce nella griglia
 * @param {number}
 * @returns {none}
 */
function generateCells(number) {
  for (let i = 1; i <= number; i++) {
    // creo l'elemento HTML della cella
    cell = document.createElement("div");
    cell.classList.add("cell");
    // aggiungo la classe che determina la width delle celle
    cell.classList.add(`nCell-${number}`);
    // inserisco il numero in iterazione nella cella
    cell.innerHTML = i;
    // aggiungo l'event listener per colorare la cella
    cell.addEventListener("click", whatNumber);
    // aggiungo la cella creata nella griglia
    grid = document.querySelector(".grid");
    grid.append(cell);
    // fine del ciclo
  }
}

/**
 * Funzione di callback che aggiunge la classe aqua e stampa in console il contenuto dell'elemento HTML
 * @param {none}
 * @returns {none}
 */
function whatNumber() {
  // aggiungo la classe che colora la cella
  this.classList.add("aqua");
  // console log del numero contenuto nella cella
  console.log(this.innerHTML);
}