// Codice di esecuzione
const playButton = document.querySelector(".play");
playButton.addEventListener("click", function() {
  const difficultyLevel = document.querySelector(".challenge-selection").value;
  // eseguo un controllo basato sulla difficoltà impostata nel select
  // cambio di conseguenza il numero parametro della funzione generatrice delle celle a seconda dell'esito
  let number = 0;
  if (difficultyLevel === "easy") {
    number = 100;
  } else if (difficultyLevel === "hard") {
    number = 81;
  } else {
    number = 49;
  }
  // catturo l'elemento HTML della griglia
  const grid = document.querySelector(".grid");
  // lo rendo visibile in pagina
  grid.classList.remove("hidden");
  // resetto il suo contenuto per evitare di accumulare griglie
  grid.innerHTML = "";
  // genero e inserisco le celle mediante la funzione
  generateCells(number);
  // creo l'array dei numeri delle celle che conterranno le bombe
  bombs = generateBombs(number);
  // stampo in console il riepilogo del codice di esecuzione
  console.log("Difficoltà:", difficultyLevel, "|", "Celle da generare:", number);
  console.log("Bombe:", bombs);
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
    cell.addEventListener("click", gameOnOrOver);
    // aggiungo la cella creata nella griglia
    grid = document.querySelector(".grid");
    grid.append(cell);
    // fine del ciclo
  }
}

/**
 * Funzione per generare un array di numeri casuali che determineranno le celle contenenti le bombe
 * @param {number} number
 * @returns {array} bombsNums
 */
function generateBombs(number) {
  const bombsNums = [];
  while (bombsNums.length < 16) {
    const rndNum = getRndInteger(1, number);
    if(!bombsNums.includes(rndNum)) {
      bombsNums.push(rndNum);
    }
  }
  return bombsNums;
}

/**
 * Funzione di callback che aggiunge la classe safe o bomb alla cella e stampa in console il contenuto dell'elemento HTML
 * @param {none}
 * @returns {none}
 */
function gameOnOrOver() {
  // confronto il numero della cella cliccata con l'array dei numeri delle bombe
  let dangerLevel = "";
  safeCells = [];
  cells = document.querySelectorAll(".cell");
  while(safeCells.length)
  if (!bombs.includes(parseInt(this.textContent))) {
    dangerLevel = "safe";
    this.classList.add(dangerLevel);
  } else {
    dangerLevel = "bomb";
    this.classList.add(dangerLevel);
  }
  // console log del numero contenuto nella cella e della classe aggiunta
  console.log(this.innerHTML, "|", dangerLevel);
}

/**
 * Funzione per ottenere un numero casuale da 1 a x in cui x è il numero delle celle generate per il gioco in base alla difficoltà selezionata
 * @param {number} number
 * @param {number} number
 * @returns {number} rndNum
 */
function getRndInteger(number, number) {
  const rndNum = Math.floor(Math.random() * number + 1);
  return rndNum;
}