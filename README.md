### ESERCIZIO
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.

#### Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


### Svolgimento

#### Dati
1. Prelevare dall'utente la difficoltà desiderata per il gioco;

#### Logica del programma

##### Esecuzione del codice
1. Aggiungere un event listener al bottone per avviare il gioco;
- Salvare in una variabile la difficoltà estrapolata dal select;
- Creare la variabile numero che conterrà il parametro che condiziona quante celle generare a seconda della difficoltà selezionata;
- Eseguire un controllo:
SE la difficoltà è impostata su easy
il numero è 100
ALTRIMENTI SE la difficoltà è impostata su hard
il numero è 81
ALTRIMENTI
il numero è 49;
- Rimuovere la classe che nasconde la griglia;
- Svuotare il contenuto dell'elemento griglia;
- Invocare la funzione per generare e inserire le celle;

##### Funzioni
La funzione fulcro del programma: funzione void che prende come parametro il numero risultato del controllo della difficoltà:
1. Ciclo for che per ogni iterazione da 1 x (in cui x è anch'esso stabilito dal controllo):
- crea l'elemento HTML div per la cella;
- aggiunge la classe cell;
- aggiunge la classe che determina la larghezza delle celle nella griglia e prende anch'essa il numero risultato del controllo;
- aggiunge alla cella l'event listener (vedere funzione seguente);
- aggiunge la cella alla griglia;

###### Funzioni di callback
Funzione void di callback senza parametri che gestisce il clic dell'utente sulle celle:
- aggiunge la classe aqua alla cella;

#### Output
1. Celle generate dalla funzione nella griglia;
2. Stampa in console dei seguenti:
- difficoltà selezionata dall'utente;
- numero delle celle generate;
- numero della cella cliccata;