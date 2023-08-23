// VARIABILI GLOBALI

const cellContainer = document.getElementById("cell-container");
const generateButton = document.getElementById("generate-grid");
const difficultSelect = document.getElementById("difficult");

let cellsTotal;
let bombs;
let score;
let cellsFreeTotal;
let isGameOver;

generateButton.addEventListener("click", function () {
	if (!difficultSelect.value) {
		alert("Seleziona una difficoltà");
		return;
	}
	cellsTotal = parseInt(difficultSelect.value);

	isGameOver = false;

	bombs = generateBombs(1, cellsTotal, 16);

	score = 0;

	cellsFreeTotal = cellsTotal - bombs.length;

	generateGrid();
});
// GENERA GRIGLIA
function generateGrid() {
	cellContainer.innerHTML = "";

	let cellsTotal = parseInt(difficultSelect.value);

	for (let i = 1; i <= cellsTotal; i++) {
		const generatedCell = generateCell(i, cellsTotal);
		cellContainer.append(generatedCell);
	}
}

// GENERA CELLA
function generateCell(cellText, cellsTotal) {
	const cell = document.createElement("li");
	cell.innerHTML = cellText;
	cell.classList.add("cell");
	cell.classList.add("cell-" + cellsTotal);
	// CLICK CELLA

	cell.addEventListener("click", function () {
		if (isGameOver || this.classList.contains("cell-clicked")) return;

		const cellNumber = parseInt(this.innerText);

		if (bombs.includes(cellNumber)) {
			this.classList.add("cell-bomb");

			endgame("Fine partita. Hai totalizzato " + score + " punti");
		} else {
			this.classList.add("cell-clicked");
			score++;

			if (score >= cellsFreeTotal) {
				endgame("Fine partita. Hai totalizzato " + score + " punti. Congratulazioni! E' un punteggio perfetto");
			}
		}
	});

	return cell;
}

const generateRandomNumber = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

const generateBombs = (min, max, qty) => {
	const uniqueArray = [];

	while (uniqueArray.length < qty) {
		const uniqueNumber = generateRandomNumber(min, max);
		if (!uniqueArray.includes(uniqueNumber)) uniqueArray.push(uniqueNumber);
	}

	return uniqueArray;
};

const endgame = (msg) => {
	// * stampo il punteggio
	alert(msg);
};
