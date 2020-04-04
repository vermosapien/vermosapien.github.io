var numSquares = 3;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msgChosen");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init(); 

resetBtn.addEventListener("click", function(){
	reset(); 
});

function init(){
	//mode button
	setupModeBtns();
	setupSquares();
	reset();
};

function setupModeBtns(){
	for(var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			modeBtn[2].classList.remove("selected");
			modeBtn[3].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else if(this.textContent === "Hard"){
                numSquares = 6;
            }
            else if(this.textContent === "Extreme"){
                numSquares = 9;
            } else {
            	numSquares = 12;
            }
			reset();
			// 			this.textContent === "Easy" ? numSquares = 3 : "Hard" ? numSquares = 6 : "Extreme" ? numSquares = 9 : "God" ? numSquares = 12 : numSquares = 9;
			// this.textContent === "Hard" ? numSquares = 6: numSquares = 3;
			// this.textContent === "Extreme" ? numSquares = 9: numSquares = 12;
			// this.textContent === "God" ? numSquares = 12: numSquares = 9;
		});
	};
};

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
			//ajouter un traceur de click to squares
			squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor; 
			// compare selected color to pickedColor
			if(clickedColor == pickedColor){
				msgDisplay.textContent = "Great!";
				reset.textContent = "Encore!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				msgDisplay.textContent = "Try Again"; 
			}
		});
	};
};

function changeColors(color){
	// boucle entre tous les carrés*
	for(var i = 0; i < squares.length; i++){
	// changement pour la couleur gagnante
	squares[i].style.backgroundColor = color; 
	}
};

function randomColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
};

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors
	for(var i = 0; i < num; i++){
	// get random color and push into arr
	arr.push(gnrtRanColor());
	}
	// return array
	return arr; 
};

function gnrtRanColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	// rgb(r,g,b)
	return "rgb(" + r +", " + g +", " + b +")";
};

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random colors
	pickedColor = randomColor();
	//change ColorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	h1.style.background	= "steelblue";
	resetBtn.textContent = "New Colors";
	msgDisplay.textContent = "";
	//change colors of squares
	// changement pour la couleur gagnante
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		};
	};
};

/* boucle pour sélectionner tous les boutons et faire des actions sur celui qu'on clique

for(var i = 0; i < modeBtn.length; i++){
	modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected")
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();

C'est opérateur ternaire / conditionnel, ce qui se traduit par:
if(this.textContent === "Easy"){
numSquares = 3;
} else {
numSquares = 6:
};

Pour reset(): 
//combien de carré à montrer
//choisir nouvelles couleurs 
//choisir the one 
//refresh page
//tout est dans la fonction!

La function RESET est condancé pour faire le travail des deux addEventListener !!! 

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	//changer les couleurs
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		};
	};
	//reset txt resetBtn
	resetBtn.textContent = "New Colors";
	//reset txt
	msgDisplay.textContent = "";
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	//changer les couleurs
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		};
	};
	//reset txt resetBtn
	resetBtn.textContent = "New Colors";
	//reset txt
	msgDisplay.textContent = "";
});

*/