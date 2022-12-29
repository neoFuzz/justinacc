document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#explosionContainer").hidden = true;
});
var wordsList = [
	["dog", "🐶", false],
	["cat", "🐱", false],
	["mouse", "🐭", false],
	["cow", "🐄", false],
	["shark", "🦈", false],
	["zebra", "🦓", false],
	["fish", "🐟", false],
	["sheep", "🐏", false],
	["camel", "🐪", false],
	["frog", "🐸", false],
	["bunny", "🐇", false],
	["rabbit", "🐰", false],
	["whale", "🐳", false],
	["horse", "🐎", false],
	["snake", "🐍", false],
	["xray", '<img src="images/x-ray.png" alt="animated X-Ray" />', false],
	["x-ray", '<img src="images/x-ray.png" alt="animated X-Ray" />', false],
	["pizza", "🍕", false],
	["apple", "🍎", false],
	["egg", "🥚", false],
	["nest", '<img src="images/nest.png" alt="animated X-Ray" />', false],
	["spoon", "🥄", false],
	["desk", "desk", false],
	["ball", "🏀", false],
	["cup", "🥤", false],
	["hat", "👒", false],
	["sock", "🧦", false],
	["socks", "🧦", false],
	["hand", "🖐", false],
	["heart", "❤", false],
	["nose", "👃", false],
	["ship", "🚢", false],
	["king", "👑", false], 
	["shoe", "👟", false],
	["bread", "🍞", false],
	["queen", "queen", false],
	["snow", "⛄❄", false],
	["storm", "🌩", false],
	["clock", "⏰", false],
	["blue", "🟦", false],
	["green", "🟩", false],
	["purple", "🟪", false],
	["red", "🟥", false],
	["yellow", "🟨", false],
	["orange", "🍊", false],
	["tomato", "🍅", false],
	["lime", "lime", false],
	["chocolate", "🍫", false],
	["circle", "⚪", false],
	["square", "⬜", false],
	["one", '<img src="images/1.svg" alt="1 with outline" />', false],
	["two", '<img src="images/2.svg" alt="2 with outline" />', false],
	["three", '<img src="images/3.svg" alt="3 with outline" />', false],
	["four", '<img src="images/4.svg" alt="4 with outline" />', false],
	["five", '<img src="images/5.svg" alt="5 with outline" />', false],
	["six", '<img src="images/6.svg" alt="6 with outline" />', false],
	["seven", '<img src="images/7.svg" alt="7 with outline" />', false],
	["eight", '<img src="images/8.svg" alt="8 with outline" />', false],
	["nine", '<img src="images/9.svg" alt="9 with outline" />', false],
	["ten", '<img src="images/10.svg" alt="10 with outline" />', false],
	["1", '<img src="images/1.svg" alt="1 with outline" />', false],
	["2", '<img src="images/2.svg" alt="2 with outline" />', false],
	["3", '<img src="images/3.svg" alt="3 with outline" />', false],
	["4", '<img src="images/4.svg" alt="4 with outline" />', false],
	["5", '<img src="images/5.svg" alt="5 with outline" />', false],
	["6", '<img src="images/6.svg" alt="6 with outline" />', false],
	["7", '<img src="images/7.svg" alt="7 with outline" />', false],
	["8", '<img src="images/8.svg" alt="8 with outline" />', false],
	["9", '<img src="images/9.svg" alt="9 with outline" />', false],
	["10", '<img src="images/10.svg" alt="10 with outline" />', false]
];
var randomWord = wordsList[getRandomInt(0, wordsList.length - 1)];
var testString = randomWord[0];
var lastLetter = "";
var checkedWord = false;
var boxName = "id";
var cntnr = document.getElementById("testLetters");
cntnr.onkeydown = function (e) {
	lastLetter = e.srcElement.value;
}
cntnr.onkeyup = function (e) {
	var target = e.srcElement;
	var maxLength = parseInt(target.attributes["maxlength"].value, 10);
	var myLength = target.value.length;
	var next = target;
	var prevBox = target.previousElementSibling;
	switch (e.keyCode) {
	case 37:
		if (prevBox != null) {
			prevBox.select();
			prevBox.focus();
		} else {
			target.select();
			break;
		}
	case 8:
		if (prevBox != null) {
			if (e.keyCode == 8 && lastLetter == "") {
				prevBox.value = "";
				prevBox.focus();
			}
			if (target.value == "" && lastLetter != "") {
				lastLetter = "";
			}
		} else {
			target.select();
			break;
		}
		break;
	case 39:
		try {
			target.nextElementSibling.select();
		} catch (e) {
			target.select();
		}
		break;
	case 38:
		break;
	case 40:
		break;
	case 16:
		break;
	default:
		if (checkedWord) {
			console.log("test");
		}
		if (myLength >= maxLength) {
			while (next = next.nextElementSibling) {
				if (next == null) {
					checkWord(false, true);
					break;
				}
				if (next.tagName.toLowerCase() == "input") {
					if (next.value.length != 0) {

						next.select();
						checkWord(false, false);
					}
					if (!checkedWord) {
						next.focus();
					}
					break;
				}
			}
			if (next == null) {
				checkWord(false, true);
			}
		}
	}
	checkedWord = false;
}
function checkWord(checkingWord, doShake) {
	const input = document.getElementById("testLetters");
	input.classList.remove();
	var textLetters = document.getElementById("testLetters").getElementsByTagName("input");
	var wordString = "";
	var blankBox = false;
	var checkWordStr = testString.toLowerCase();

	for (let letter in textLetters) {
		var testNumber = parseInt(letter);
		if (!isNaN(testNumber)) {
			textLetters[letter].style.backgroundColor = "white";
			if (textLetters[letter].value != "") {
				wordString += textLetters[letter].value.toLowerCase();
			} else {
				if (!blankBox) {
					textLetters[letter].select();
				}
				blankBox = true;
				textLetters[letter].style.backgroundColor = "pink";
				wordString += " ";
			}
		}
	}
	if (wordString.toLowerCase() != checkWordStr) {
		for (let i = 0; i < wordString.length; i++) {
			if (checkWordStr[i] != textLetters[i].value) {
				if (!checkedWord) {
					textLetters[i].select();
				}
				checkedWord = true;
				textLetters[i].style.backgroundColor = "pink";
			}
		}
	}
	if (!blankBox) {
		if (wordString.toLowerCase() == checkWordStr) {
			//explode and correct
			doShake = false;
			document.querySelector("#explosionContainer").hidden = false;
			let testLetters = new ExplosiveButton("#explosionContainer");
			testLetters.explode(1000);
			document.querySelector("#testLetters").hidden = true;
			setTimeout(function () {
				document.getElementById("testWord").innerText = "correct!";
				setTimeout(resetBoard, 2000);
			}, 200);
			setTimeout(function () {
				document.querySelector("#explosionContainer").hidden = true;
			}, 1001);
			//document.getElementById("testWord").innerText = "correct!";

		}
		if (doShake) { // don't shake if word correct
			input.classList.add("shakeEl");
			input.addEventListener("animationend", (e) => {
				input.classList.remove("shakeEl");
			});
		}
	}
}
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function resetBoard() {
	randomWord = wordsList[getRandomInt(0, wordsList.length - 1)];
	testString = randomWord[0];
	lastLetter = "";
	checkedWord = false;

	document.getElementById("testLetters").innerHTML = "";
	document.getElementById("testWord").innerHTML = "" + randomWord[1];

	for (var i = 0; i < testString.length; i++) {
		var x = document.createElement("INPUT");
		x.setAttribute("type", "text");
		x.setAttribute("id", "id" + i);
		x.setAttribute("maxLength", "1");
		x.setAttribute("autocomplete", "off");
		x.setAttribute("autocorrect", "off");
		x.setAttribute("autocapitalize", "off");
		x.setAttribute("spellcheck", "false");
		x.setAttribute("class", "letterBox");
		if (i > 0) {
			x.setAttribute("style", " margin-left:10px");
		}
		document.getElementById("testLetters").appendChild(x);
	}
	document.querySelector("#testLetters").hidden = false;
	document.querySelector("#id0").focus();
}
resetBoard();