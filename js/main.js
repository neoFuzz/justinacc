var hue = 0;
var colourBlender;
var disAccepted = false;
var gameMode = true;
var context = document.getElementsByTagName('canvas')[0].getContext('2d');
const capitalizeFirstLetter = ([first,...rest],locale=navigator.language)=>first.toLocaleUpperCase(locale) + rest.join('');
const keyStack = ["X", "U", "S", "T", "I", "N", "A", "8", "9"];
document.body.bgColor = "#FFC0C0";
function mode_1(evt) {
    evt.preventDefault();
    evt = evt || window.event;
    var newKey = evt.key.toUpperCase();
    document.getElementById("fake").value = newKey;
    var debugString = "";
    var funWordTest = "string";
    var colourString = "rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
    var randomnumber = getRandomInt(1, 3);
    var colouredKey = false;
    var wordChecked = false;
    var imageDef = "" + newKey;
    clearInterval(colourBlender);
    document.getElementById("gradient").hidden = false;
    if (newKey == " ") {
        imageDef = "Space";
    }
    if (evt.code == "Backspace") {
        keyStack.pop();
        keyStack.unshift("x");
    } else {
        keyStack.push(newKey);
        keyStack.shift();
    }
    keyStack.forEach(element=>debugString += element);
    document.getElementById("page").hidden = true;
    document.getElementById("debugtext").innerText = "" + debugString;
    for (var sample in fKeyColours) {
        if (sample == newKey) {
            colouredKey = true;
            colourString = fKeyColours[sample];
        }
    }
    funWordTest = debugString.slice(2, debugString.length);
    if (funWordTest == "JUSTINA" || funWordTest == "JOHANNA") {
        colourBlender = null;
        colourBlender = setInterval(bgcolor, 10);
        imageDef = "<img src='icon.png' alt='Justina's face' /><br />" + capitalizeFirstLetter(funWordTest.toLowerCase());
        document.getElementById("page").hidden = false;
    }
    if (colouredKey) {
        imageDef = "" + fKeyColours[newKey];
        document.getElementById("gradient").hidden = true;
    } else {
        for (let i = 0; i < debugString.length; i++) {
            if (!wordChecked) {
                funWordTest = debugString.slice(i, debugString.length).toString();
            } else {
                break;
            }
            for (let y = 0; y < funWordsV2.length; y++) {
                var testString = "" + funWordsV2[y][0];
                switch (testString) {
                case funWordTest.toLowerCase():
                case funWordTest.toUpperCase():
                case capitalizeFirstLetter(funWordTest.toLowerCase()):
                    newKey = funWordsV2[y][1];
                    funWordsV2[y][2] = true;
                    wordChecked = true;
                    break;
                }
            }
        }
        if (wordChecked) {
            for (var sample in fKeyColours) {
                if (capitalizeFirstLetter(fKeyColours[sample].toLowerCase()) == capitalizeFirstLetter(funWordTest.toLowerCase())) {
                    colourString = fKeyColours[sample];
                }
            }
            document.getElementById("gradient").hidden = true;
            imageDef = "" + newKey;
            if (imageDef.includes(':')) {
                imageDef = newKey.split(':');
                imageDef = '<img src="images/' + imageDef[0] + '" alt="' + imageDef[1] + '" />';
            }
            imageDef += "<br />" + funWordTest.toUpperCase();
        }
    }
    document.getElementById("middletext").innerHTML = "" + imageDef;
    document.body.style.backgroundColor = "" + colourString;
    document.getElementById("fake").value = "";
    document.getElementById("fake").focus();
}
function bgcolor() {
    hue = hue + Math.random() * 3;
    context.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}
function showWordList() {
    var wordList = "";
    var trueCount = 0;
    for (var i = 0; i < funWordsV2.length; i++) {
        if (funWordsV2[i][2]) {
            trueCount++;
            wordList += funWordsV2[i][0] + "&nbsp;";
            if (funWordsV2[i][1].includes(':')) {
                var imageDef = funWordsV2[i][1].split(':');
                wordList += '<img id="icon" src="images/' + imageDef[0] + '" alt="' + imageDef[1] + '" />, ';
            } else {
                wordList += funWordsV2[i][1] + ", ";
            }
        }
    }
    return "Words discovered: " + trueCount + " of " + funWordsV2.length + "<br />" + wordList.slice(0, wordList.length - 2);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function hideDisclaimer() {
    if (disAccepted) {
        document.getElementById("disclaimer").hidden = true;
        document.getElementById("fake").focus();
        document.getElementById("disclaimertext").style.height = null;
        document.getElementById("disclaimertext").style.overflow = null;
        disAccepted = false;
    } else {
        document.getElementById("disclaimertext").innerHTML = "press keys on the keyboard and try to find words";
        document.getElementById("dTitle").innerHTML = "How to Play";
        disAccepted = true;
    }
}
function showDialog(title, displayText) {
    closeNav();
    document.getElementById("disclaimertext").innerHTML = displayText;
    document.getElementById("dTitle").innerHTML = title;
    if (displayText.includes('json:')) {
        fetch('jsondata/updates.json').then(response=>response.text()).then(text=>document.getElementById("disclaimertext").innerHTML = text)
    }
    if (displayText == 'words') {
        document.getElementById("disclaimertext").innerHTML = showWordList();
        document.getElementById("disclaimertext").style.height = "100%";
        document.getElementById("disclaimertext").style.overflow = "auto";
    }
    document.getElementById("disclaimer").hidden = false;
    if (disAccepted) {
        document.getElementById("disclaimer").hidden = true;
        document.getElementById("fake").focus();
        disAccepted = false;
    }
    disAccepted = true;
}
function changeMode() {
    if (gameMode) {
        document.getElementById("mode_swap").innerHTML = "Find All Words";
        gameMode = false;
		document.getElementById("mode_2").hidden = true;
		document.getElementById("middletext").hidden = false;
		document.addEventListener('keydown', mode_1);
		closeNav();
    } else {
        document.getElementById("mode_swap").innerHTML = "Spell The Word";
		document.removeEventListener('keydown', mode_1);
		document.getElementById("middletext").hidden = true;
        gameMode = true;
		resetBoard();
		closeNav();
		document.getElementById("mode_2").hidden = false;
		document.querySelector("#id0").focus();
    }
}
function debugModeShow(boolSwitch) {
	document.getElementById("debugtext").hidden = !boolSwitch;
	document.getElementById("fake").hidden = !boolSwitch;
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
