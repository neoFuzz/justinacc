document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#explosionContainer").hidden=true;});var wordsList=funWordsV2;var randomWord=wordsList[getRandomInt(0,wordsList.length-1)];var testString=randomWord[0];var lastLetter="";var checkedWord=false;var boxName="id";var cntnr=document.getElementById("testLetters");var errorCount /* for the smart-ar5e */;cntnr.onkeydown=function(e){lastLetter=e.srcElement.value;}
cntnr.onkeyup=function(e){var target=e.srcElement;var maxLength=parseInt(target.attributes["maxlength"].value,10);var myLength=target.value.length;var next=target;var prevBox=target.previousElementSibling;switch(e.keyCode){case 37:if(prevBox!=null){prevBox.select();prevBox.focus();}else{target.select();break;}
case 8:if(prevBox!=null){if(e.keyCode==8&&lastLetter==""){prevBox.value="";prevBox.focus();}
if(target.value==""&&lastLetter!=""){lastLetter="";}}else{target.select();break;}
break;case 39:try{target.nextElementSibling.select();}catch(e){target.select();}
case 38:case 40:case 16:break;default:if(checkedWord){console.log("test");}
if(myLength>=maxLength){while(next=next.nextElementSibling){if(next==null){checkWord(false,true);break;}
if(next.tagName.toLowerCase()=="input"){if(next.value.length!=0){next.select();checkWord(false,false);}
if(!checkedWord){next.focus();}
break;}}
if(next==null){checkWord(false,true);}}}
checkedWord=false;}
function checkWord(checkingWord,doShake){const input=document.getElementById("testLetters");input.classList.remove();var textLetters=document.getElementById("testLetters").getElementsByTagName("input");var wordString="";var blankBox=false;var checkWordStr=testString.toLowerCase();for(let letter in textLetters){var testNumber=parseInt(letter);if(!isNaN(testNumber)){textLetters[letter].style.backgroundColor="white";if(textLetters[letter].value!=""){wordString+=textLetters[letter].value.toLowerCase();}else{if(!blankBox){textLetters[letter].select();}
blankBox=true;textLetters[letter].style.backgroundColor="pink";wordString+=" ";}}}
if(wordString.toLowerCase()!=checkWordStr){errorCount++;for(let i=0;i<wordString.length;i++){if(checkWordStr[i]!=textLetters[i].value.toLowerCase()){if(!checkedWord){textLetters[i].select();}
checkedWord=true;textLetters[i].style.backgroundColor="pink";}}}
if(!blankBox){if(wordString.toLowerCase()==checkWordStr){doShake=false;document.querySelector("#explosionContainer").hidden=false;let testLetters=new ExplosiveButton("#explosionContainer");testLetters.explode(1000);document.querySelector("#testLetters").hidden=true;document.querySelector("#testWord").hidden=true;document.getElementById("verified").hidden=false;setTimeout(function(){document.getElementById("verified").innerText="Correct!";setTimeout(resetBoard,2000);},200);setTimeout(function(){document.querySelector("#explosionContainer").hidden=true;},1001);}
if(errorCount>=10){doShake=false;document.querySelector("#explosionContainer").hidden=false;let testLetters=new ExplosiveButton("#explosionContainer");testLetters.explode(1000);document.querySelector("#testLetters").hidden=true;document.querySelector("#testWord").hidden=true;document.getElementById("verified").hidden=false;setTimeout(function(){document.getElementById("verified").innerText="Incorrect!";setTimeout(resetBoard,2000);},200);setTimeout(function(){document.querySelector("#explosionContainer").hidden=true;},1001);}
if(doShake){input.classList.add("shakeEl");input.addEventListener("animationend",(e)=>{input.classList.remove("shakeEl");});}}}
function getRandomInt(min,max){min=Math.ceil(min);max=Math.floor(max);return Math.floor(Math.random()*(max-min+1))+min;}
function resetBoard(){errorCount=0;document.getElementById("verified").hidden=true;document.getElementById("verified").innerText=".";document.querySelector("#testWord").hidden=false;randomWord=wordsList[getRandomInt(0,wordsList.length-1)];testString=randomWord[0];lastLetter="";checkedWord=false;document.getElementById("testLetters").innerHTML="";if(randomWord[1].includes(':')){var imageDef=randomWord[1].split(':');document.getElementById("testWord").innerHTML=""+'<img src="images/'+imageDef[0]+'" alt="'+imageDef[1]+'" />';}else{document.getElementById("testWord").innerHTML=""+randomWord[1];}
for(var i=0;i<testString.length;i++){var x=document.createElement("INPUT");x.setAttribute("type","text");x.setAttribute("id","id"+i);x.setAttribute("maxLength","1");x.setAttribute("autocomplete","off");x.setAttribute("autocorrect","off");x.setAttribute("autocapitalize","off");x.setAttribute("spellcheck","false");x.setAttribute("class","letterBox");if(i>0){x.setAttribute("style"," margin-left:0.2em");}
document.getElementById("testLetters").appendChild(x);}
document.querySelector("#testLetters").hidden=false;document.querySelector("#id0").focus();}
resetBoard();