const cellTotal = 10 * 10;
const cellContainer = document.getElementById("cell-container");
const generateButton = document.getElementById("generate-grid");

generateButton.addEventListener("click", function () {
	generateGrid(cellTotal, cellContainer);
});

function createGrid(container, i) {
	const cell = document.createElement("li");
	cell.setAttribute("data-index", i);
	cell.classList.add("cell");
	container.append(cell);
	cell.addEventListener("click", function () {
		const index = this.getAttribute("data-index");
		this.innerText = index;
		this.classList.add("cell-even");
		console.log(this);
	});
}

function generateGrid(celsNumber, container) {
	container.innerHTML = "";
	for (let i = 1; i <= celsNumber; i++) {
		createGrid(container, i);
	}
}

let randomPc = MathFloor(MathRandom() * 16);
