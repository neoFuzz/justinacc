// Generated JS from Java: WordMaker -----
function WordMaker() {
    trueVowels = null;
    startingVowelSounds = null;
    vowelSounds = null;
    basicConsonants = null;
    startingConsonantSounds = null;
    endingConsonantSounds = null;
    middleConsonantSounds = null;

    jv_Object.call(this);
    this._WordMakerInit();
    WordMaker_c.initializeMiddleConsonantSounds.call(this);
}

var WordMaker_c = sc_newClass("WordMaker", WordMaker, jv_Object, null);

WordMaker_c.capitalized = function (word)  {
    const capitalizeFirstLetter = ([first,...rest],locale=navigator.language)=>first.toLocaleUpperCase(locale) + rest.join('');
    var checked = true;
    var newWord = "";
    for (var i = 0; i < word._length(); ++i) {
        var letter = word.substring(i, i + 1).toCharArray()[0];
        if (letter === ' ') {
            checked = true;
            newWord = newWord + ' ';
        }
        else
        if (letter === '`') {
            checked = false;
            ++i;
        }
        else {
            if (checked) {
                letter = capitalizeFirstLetter(letter) ;// + 65 - 97));
                checked = false;
            }
            newWord = newWord + letter;
        }
    }
    return newWord;
};
WordMaker_c.initializeMiddleConsonantSounds = function ()  {
    var length = this.basicConsonants.length;
    this.middleConsonantSounds = sc_newArray(String_c, length * length);
    for (var i = 0; i < length; ++i) {
        for (var j = 0; j < length; ++j) {
            var consonantA = this.basicConsonants[i];
            var consonantB = this.basicConsonants[j];
            if (consonantA.equals("qu")) {
                consonantA = "k";
            }
            if (consonantA.equals(consonantB)) {
                this.middleConsonantSounds[i * length + j] = consonantA;
            }
            else {
                this.middleConsonantSounds[i * length + j] = consonantA + consonantB;
            }
        }
    }
};
WordMaker_c.randomWord = function ()  {
    var randomNum = jv_Math_c.random() * 13.0;
    var selection = Math.floor(randomNum);
    switch(selection) {
        case 0:
            return "`A`M`V`\t`\t " + WordMaker_c.A.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 1:
            return "`A`B`V`\t`\t " + WordMaker_c.A.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this);
        case 2:
            return "`A`M`V`E`\t`\t " + WordMaker_c.A.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 3:
            return "`A`B`V`E`\t`\t " + WordMaker_c.A.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 4:
            return "`A`B`V`B`V`\t`\t " + WordMaker_c.A.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this);
        case 5:
            return "`A`B`V`M`V`\t`\t " + WordMaker_c.A.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 6:
            return "`A`M`V`B`V`\t`\t " + WordMaker_c.A.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 7:
            return "`A`M`V`M`V`\t`\t " + WordMaker_c.A.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 8:
            return "`S`V`E`\t`\t " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 9:
            return "`S`V`M`V`\t`\t " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 10:
            return "`S`V`B`V`\t`\t " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this);
        case 11:
            return "`S`V`M`V`E`\t`\t " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 12:
            return "`S`V`B`V`E`\t`\t " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        default :
            return "Error";
    }
};
WordMaker_c.randomPlaceName = function ()  {
    var randomNum = jv_Math_c.random() * 53.0;
    var selection = Math.floor(randomNum);
    switch(selection) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return WordMaker_c.A.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 7:
        case 8:
        case 9:
        case 10:
            return WordMaker_c.A.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this);
        case 11:
        case 12:
        case 13:
        case 14:
            return WordMaker_c.A.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 15:
        case 16:
        case 17:
        case 18:
            return WordMaker_c.A.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 19:
            return WordMaker_c.A.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this);
        case 20:
            return WordMaker_c.A.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 21:
            return WordMaker_c.A.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
            return this.T() + this.A();
        case 30:
        case 31:
        case 32:
        case 33:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 34:
        case 35:
        case 36:
        case 37:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 38:
        case 39:
        case 40:
        case 41:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this);
        case 42:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 43:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.B.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 44:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this) + WordMaker_c.M.call(this) + WordMaker_c.V.call(this);
        case 45:
        case 46:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + " " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this);
        case 47:
        case 50:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this) + " " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this);
        case 48:
            return WordMaker_c.A.call(this) + WordMaker_c.E.call(this) + " " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this);
        case 49:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + " " + WordMaker_c.A.call(this) + WordMaker_c.E.call(this);
        case 51:
            return WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + " " + WordMaker_c.S.call(this) + WordMaker_c.V.call(this) + WordMaker_c.E.call(this);
        case 52:
            return WordMaker_c.A.call(this) + WordMaker_c.E.call(this) + " " + WordMaker_c.A.call(this) + WordMaker_c.E.call(this) + WordMaker_c.V.call(this);
        default :
            return "Error";
    }
};
WordMaker_c.T = function ()  {
    var randomLen = jv_Math_c.random() * (this.trueVowels.length);
    var select = Math.floor(randomLen);
    return this.trueVowels[select];
};
WordMaker_c.S = function ()  {
    var randomLen = jv_Math_c.random() * (this.startingConsonantSounds.length);
    var select = Math.floor(randomLen);
    return this.startingConsonantSounds[select];
};
WordMaker_c.A = function ()  {
    var randomLen = jv_Math_c.random() * (this.startingVowelSounds.length);
    var select = Math.floor(randomLen);
    return this.startingVowelSounds[select];
};
WordMaker_c.V = function ()  {
    var randomLen = jv_Math_c.random() * (this.vowelSounds.length);
    var select = Math.floor(randomLen);
    return this.vowelSounds[select];
};
WordMaker_c.E = function ()  {
    var randomLen = jv_Math_c.random() * (this.endingConsonantSounds.length);
    var select = Math.floor(randomLen);
    return this.endingConsonantSounds[select];
};
WordMaker_c.M = function ()  {
    var randomLen = jv_Math_c.random() * (this.middleConsonantSounds.length);
    var select = Math.floor(randomLen);
    return this.middleConsonantSounds[select];
};
WordMaker_c.B = function ()  {
    let randomLen = jv_Math_c.random() * (this.basicConsonants.length);
    let select = Math.floor(randomLen);
    return this.basicConsonants[select];
};
let Debug_c;
WordMaker_c.main = function (args)  {
    let i;
    var output = "<b>Random Place Names</b><br />";
    for (i = 0; i < 10; ++i) {
        let log = WordMaker_c.capitalized((new WordMaker()).randomPlaceName());
        output = output + log + "<br />";
    }
    output = output + "<p></p><b>Random Words</b><br />";
    for (i = 0; i < 10; ++i) {
        let log = WordMaker_c.capitalized((new WordMaker()).randomWord());
        output = output + log + "<br />";
    }
    return output;
};

WordMaker_c._WordMakerInit = function() {
    this.trueVowels = sc_initArray(String_c, 1, [ "a", "e", "i", "o", "u", "y" ]);
    this.startingVowelSounds = sc_initArray(String_c, 1,
        [ "a", "ai", "au", "e", "ea", "ee", "eo", "i", "ia", "io", "o", "oa", "oe", "oi", "oo", "ou", "u", "ua", "ue",
            "ya", "ye", "yo", "a", "ai", "au", "e", "ea", "ee", "eo", "eu", "ey", "i", "ia", "io", "iu", "o", "oa",
            "oe", "oi", "oo", "ou", "u", "ua", "ue", "ui", "ya", "ye", "yi", "yo", "a", "ai", "au", "e", "ea", "ei",
            "ee", "eo", "eu", "ey", "i", "ia", "ie", "io", "iu", "iy", "o", "oa", "oe", "oi", "oo", "ou", "oy", "u",
            "ua", "ue", "ui", "uy", "ya", "ye", "yi", "yo", "yu" ]);
    this.vowelSounds = sc_initArray(String_c, 1,
        [ "a", "e", "i", "o", "a", "ae", "ai", "ao", "au", "ay", "e", "ea", "ee", "eo", "eu", "ey", "i", "ia", "ie",
            "io", "o", "oa", "oe", "oi", "oo", "ou", "oy", "u", "ua", "ui", "a", "e", "i", "o", "a", "ae", "ai", "ao",
            "au", "ay", "e", "ea", "ee", "eo", "eu", "ey", "i", "ia", "ie", "io", "o", "oa", "oe", "oi", "oo", "ou",
            "oy", "u", "ua", "ue", "ui", "uo", "ya", "ye", "yi", "yo", "yu", "a", "e", "i", "o", "a", "ae", "ai", "ao",
            "au", "ay", "aya", "e", "ea", "ee", "ei", "eo", "eu", "ey", "i", "ia", "ie", "io", "iy", "o", "oa", "oe",
            "oi", "oo", "ou", "oy", "u", "ua", "ue", "ui", "uy", "y", "ya", "ye", "yi", "yo", "yu" ]);
    this.basicConsonants = sc_initArray(String_c, 1,
        [ "'", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "n", "p", "qu", "r", "s", "t", "v", "w", "x", "z", "b",
            "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "n", "p", "r", "s", "t", "v", "z", "b", "d", "f", "g", "j", "k",
            "l", "m", "n", "n", "p", "r", "s", "t", "v" ]);
    this.startingConsonantSounds = sc_initArray(String_c, 1,
        [ "b", "bl", "br", "c", "ch", "cl", "cr", "d", "dj", "dl", "dr", "dv", "f", "fl", "fr", "g", "gl", "gr", "h",
            "j", "k", "kh", "kl", "kr", "l", "m", "n", "nr", "p", "ph", "pl", "pr", "r", "rh", "rv", "s", "sb", "sc",
            "sd", "sh", "sk", "sl", "sm", "sn", "sp", "sr", "st", "sv", "sw", "t", "th", "tl", "tr", "tv", "tw", "v",
            "vr", "w", "wr", "x", "z", "zh", "b", "bl", "br", "c", "ch", "cl", "cr", "cz", "d", "dj", "dl", "dr", "dv",
            "dw", "f", "fl", "fr", "g", "gl", "gr", "h", "j", "k", "kh", "kl", "kr", "l", "m", "mr", "n", "nr", "p", "ph",
            "pl", "pr", "qu", "r", "rh", "rv", "s", "sb", "sc", "sd", "sg", "sh", "sk", "sl", "sm", "sn", "sp", "squ",
            "sr", "st", "sv", "sw", "t", "th", "tl", "tr", "tv", "tw", "tz", "v", "vr", "w", "wh", "wr", "x", "z", "zh",
            "zv" ]);
    this.endingConsonantSounds = sc_initArray(String_c, 1,
        [ "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "x", "z", "b", "c", "d", "f", "g",
            "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "x", "z", "ch", "rth", "rm", "zh", "b", "c", "d", "f", "g",
            "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "bs", "cs", "ch", "ds", "fs", "gh", "gs",
            "ks", "ls", "lp", "ld", "mt", "nt", "ps", "rp", "rn", "st", "sh", "sm", "ts", "vs", "wl", "zh", "b", "c",
            "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "bs", "cs", "ch", "fs", "gh",
            "gs", "ks", "ls", "lp", "ld", "ms", "ns", "ps", "rt", "rp", "st", "sh", "sm", "ts", "vs", "ws", "zh", "b",
            "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "bs", "cs", "ch", "ck",
            "ds", "fs", "gh", "gs", "ks", "ls", "lp", "ld", "ms", "ns", "ps", "que", "rd", "rk", "st", "sh", "sm",
            "ts", "tz", "vs", "wk", "zh" ]);
};

// Generated JS from Java: Debug -----
function Debug() {

    Debug_c._clInit();
    jv_Object.call(this);
}

Debug_c = sc_newClass("Debug", Debug, jv_Object, null);

Debug_c.print = function (message)  {
    Debug_c._clInit();
    if (Debug_c.terminalPrinting) {
        jv_System_c.out.print(message);
    }
};
Debug_c.println = function (message)  {
    Debug_c._clInit();
    if (Debug_c.terminalPrinting) {
        jv_System_c.out.println(message);
    }
};
Debug_c.error = function (message)  {
    Debug_c._clInit();
    if (Debug_c.errorLogging) {
        jv_System_c.err.println(message);
    }
};

Debug_c._clInit = function() {
    if (Debug_c.hasOwnProperty("_clInited")) return;
    Debug_c._clInited = true;

    Debug_c.terminalPrinting = true;
    Debug_c.errorLogging = true;
};