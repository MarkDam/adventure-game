var title = document.getElementById("title");
var image = document.getElementById("image");
var options = document.getElementById("options");

var einde = ["1"];

var sleutel1 = ["1"]; document.getElementById("button1");

var unlock = ["1"]; document.getElementById("button1");

var ladder = ["1"]; document.getElementById("button1");

var lader2 = ["1"];

var plaats = ["1"]; document.getElementById("button1");

var boven = ["1"];

var ijzer = ["1"];

var slot = ["1"];

var knop = ["1"];

var plaatje1 = ["1"];

var plaatje2 = ["1"];

var plaatje3 = ["1"];


function start()
{
	title.innerHTML = "Het begin";
	p.innerHTML = "Je bent in een kamer van een piramide.";
	image.src = "img/piramide.11.jpg";
	button1.innerHTML = "Er is een deur links. Open de deur.";
	button2.innerHTML = "Er is een deur rechts. Open de deur.";
	if (unlock.length <= 1) {
	  button1.setAttribute("onclick", "linkerDeur();");
	} else {
		button1.setAttribute("onclick", "gang1();");
	}
	  button2.setAttribute("onclick", "vasenkamer();");
	image2.style.display = "none";
	image3.style.display = "none";
	image4.style.display = "none";
	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function vasenkamer()
{
	title.innerHTML = "De Vasenkamer";
	p.innerHTML = "Je staat in een kamer vol vasen en en een stuk van een ladder.";
	image.src = "img/piramide.13.jpg";
	image2.src = "img/piramide.ladder.jpg";
	if (knop.length <= 1) {
		button1.style.display = "inline";
	} else {
		button1.style.display = "none";
	}
	if (plaatje1.length <= 1) {
		image2.style.display = "inline";
	} else {
		image2.style.display = "none";
	}
	button1.innerHTML = "Pak het stuk van de ladder.";
	button2.innerHTML = "kijk in 1 van de vasen.";
	button3.innerHTML = "Ga terug.";
		button1.setAttribute("onclick", "image2.style.display = 'none'; ladder.push('2'); plaatje1.push('2'); knop.push('2')");
		button2.setAttribute("onclick", "devaas();");
	  button3.setAttribute("onclick", "start();");
	image3.style.display = "none";
	button3.style.display = "inline";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function devaas()
{
	title.innerHTML = "In de vaas";
	p.innerHTML = "Je ziet een sleutel liggen.";
	image.src = "img/piramide.vaas.jpg";
	image3.src = "img/piramide.sleutel.jpg";
	if (plaatje2.length <= 1) {
		image3.style.display = "inline";
	} else {
		image3.style.display = "none";
	}
	button1.innerHTML = "Pak de sleutel op.";
	button2.innerHTML = "Stop met kijken in de vaas";
		button1.setAttribute("onclick", "image3.style.display = 'none'; plaatje2.push('2'); sleutel1.push('2')");
		button2.setAttribute("onclick", "vasenkamer();");
	image2.style.display = "none";
	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}



function linkerDeur()
{
	title.innerHTML = "Gesloten Deur";
	p.innerHTML = "De deur is op slot.";
	image.src = "img/piramide.14.jpg";
	button1.innerHTML = "Ga terug.";
	button2.innerHTML = "Open de deur met de sleutel.";  /////// kan alleen open met sleutel /////// var unlock = 2 ////////////
	  button1.setAttribute("onclick", "start();");
		if (sleutel1.length <= 1) {
			button2.setAttribute("onclick", "alert('Je hebt geen sleutel')");
		} else {
			button2.setAttribute("onclick", "gang1();");
			unlock.push("2")
		}
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function gang1()
{
	title.innerHTML = "Gang 1";
	p.innerHTML = "Er is een gat in het dak en een stuk ladder op de vloer en er is een deur helemaal achterin.";
	image.src = "img/piramide.9.jpg";
	image4.src = "img/piramide.ladder.jpg";
	image5.src = "img/ladder.jpg";
	if (plaatje3.length <= 1) {
		image4.style.display = "inline";
	} else {
		image4.style.display = "none";
	}
	if (boven.length <= 1) {
		image5.style.display = "none";
	} else {
		image5.style.display = "inline";
	}
	button1.innerHTML = "Plaats de ladder onder het gat in het dak.";
	button2.innerHTML = "Ga naar boven.";
	button3.innerHTML = "Pak het stuk van de ladder.";
	button4.innerHTML = "Loop naar de deur en open het."; /////////// dit leid naar het einde /////////////
	button5.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "checkLadder();");
		button2.setAttribute("onclick", "checkPlaats();");
		button3.setAttribute("onclick", "image4.style.display = 'none'; plaatje3.push('2'); ladder.push('1')");
		button4.setAttribute("onclick", "geslotendeur();");
	  button5.setAttribute("onclick", "start();");
	image5.style.display = "none";
	button3.style.display = "block";
	button4.style.display = "block";
	button5.style.display = "block";
	button6.style.display = "none";
}

function checkLadder() {
if (ladder.length <= 2) {
	alert('Je hebt niet genoeg ladder onderdelen.');
	} else {
		image5.style.display = 'inline';
		plaats.push('2');
	}
}

function checkPlaats() {
	if (plaats.length <= 1) {
		alert('Je hebt de ladder nog niet geplaatst.');
	} else {
		beeldenkamer();
	}
}

function geslotendeur() {
	title.innerHTML = "Gesloten deur";
	p.innerHTML = "De deur is op slot.";
	image.src = "img/piramide.14.jpg";
	button1.innerHTML = "Open de deur met de bol.";
	button2.innerHTML = "Ga terug";
	if (einde.length <= 1) {
		button1.setAttribute("onclick", "alert('Je hebt geen bol')");
	} else {
		button1.setAttribute("onclick", "hetEinde();");
	}
		button2.setAttribute("onclick", "gang1();");
	image4.style.display = "none";
	image5.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}

function hetEinde() {
	title.innerHTML = "Einde";                ///////////// DIT IS HET EINDE////////////////
	p.innerHTML = "Je bent ontsnapt!";
	p2.innerHTML = "Refresh de pagina om het spel overnieuw te spelen";
	image.src = "img/piramide.einde.jpg";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}

function beeldenkamer() {
	title.innerHTML = "Beeldenkamer";
	p.innerHTML = "Je bent in een zaal vol beelden.";
	image.src = "img/piramide.6.jpg";
	if (boven <= 1) {
		image5.style.display = "inline";
	} else {
		image5.style.display = "none";
	}
	button1.innerHTML = "Er is een deur helemaal achterin. Loop ernaar en open het.";
	button2.innerHTML = "Er is een deur rechts. Loop ernaar en open het.";
	button3.innerHTML = "Er is een deur links. Loop ernaar en open het.";
	button4.innerHTML = "Pak de ladder.";
	button5.innerHTML = "plaats de ladder.";
	button6.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "vallenkamer();");
		button2.setAttribute("onclick", "gang2();");
		if (slot <= 1) {
			button3.setAttribute("onclick", "gang3();");
		} else {
			button3.setAttribute("onclick", "juistenummer();");
		}
		button4.setAttribute("onclick", "image5.style.display = 'none'; boven.push('2')");
		button5.setAttribute("onclick", "image5.style.display = 'inline'; boven.splice(1, 1)");
		button6.setAttribute("onclick", "terug1();");
	image4.style.display = "none";
	button3.style.display = "block";
	button4.style.display = "block";
	button5.style.display = "block";
	button6.style.display = "block";
}

function terug1() {
	if (boven.length <= 1) {
		gang1();
	} else {
		alert("Er staat geen ladder.");
	}
}


function vallenkamer() {
	title.innerHTML = "Prijzenkamer";
	p.innerHTML = "Je loopt de kamer binnen en merkt dat het dak begint intestorten. Je wordt bedolven onder de storm stenen. GAME OVER.";
	image.src = "img/piramide.5.jpg";
	image5.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function gang2() {
	title.innerHTML = "Gang 2";
	p.innerHTML = "Je komt een gang in en ziet aan het einde een deur.";
	image.src = "img/piramide.8.jpg";
	image5.style.display = "none";
	image6.style.display = "none";
	button1.innerHTML = "Loop ernaar en open het.";
	button2.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "goudkamer();");
		button2.setAttribute("onclick", "beeldenkamer();");
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function goudkamer() {
	title.innerHTML = "Goudkamer";
	p.innerHTML = "Je komt een kamer binnen en ziet rechts een breekijzer liggen en rechtvooruit een kristal.";
	image.src = "img/piramide.3.jpg";
	image6.src = "img/piramide.breekijzer.jpg";
	if (ijzer <= 1) {
		image6.style.display = "inline";
	} else {
		image6.style.display = "none";
	}
	button1.innerHTML = "Pak op het breekijzer.";
	button2.innerHTML = "Loop naar het kristal en pak het op.";
	button3.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "image6.style.display = 'none'; ijzer.push('2')");
		button2.setAttribute("onclick", "val();");
		button3.setAttribute("onclick", "gang2();");
	button3.style.display = "block";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function val() {
	title.innerHTML = "Goudkamer val";
	p.innerHTML = "door het oppakken van het kristal gaat de val af, waardoor de deur dicht gaat en de vloer instort. GAME OVER.";
	image.src = "img/piramide.5.jpg";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function gang3() {
	title.innerHTML = "Gang 3";
	p.innerHTML = "Je bent in een ruimte waar de vloer voor je weg is en 2 planken op de grond liggen en maar 1 is gangbaar.";
	image.src = "img/piramide.7.jpg";
	image5.style.display = "none";
	button1.innerHTML = "Neem de linkse plank.";
	button2.innerHTML = "Neem de rechtse plank.";
	button3.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "valseplank();");
		if (boven.length+ijzer.length <= 3) {
			button2.setAttribute("onclick", "juisteplank();");
		} else {
			button2.setAttribute("onclick", "tezwaar();");
		}
		button3.setAttribute("onclick", "beeldenkamer();");
	button3.style.display = "block";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function valseplank() {
	title.innerHTML = "Foute plank";
	p.innerHTML = "Je hebt de verkeerde plank gekozen en valt in het gat. GAME OVER";
	image.src = "img/piramide.5.jpg";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function tezwaar() {
	title.innerHTML = "Te zwaar";
	p.innerHTML = "Je draagt te veel spullen waardoor je te zwaar bent voor de plank, waardoor het breekt en je valt in het gat. GAME OVER";
	image.src = "img/piramide.5.jpg";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function juisteplank() {
	title.innerHTML = "Slot";
	p.innerHTML = "Dit is de juiste plank. Je loopt voorzichtig over de plank en nu sta je voor een speciaal slot met een vraag: De hoeveelste ruimte is dit?";
	image.src = "img/piramide.slot.jpg";
	button1.innerHTML = "11";
	button2.innerHTML = "10";
	button3.innerHTML = "9";
	button4.innerHTML = "8";
	button5.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "verkeerdenummer();");
		button2.setAttribute("onclick", "verkeerdenummer();");
		button3.setAttribute("onclick", "verkeerdenummer();");
		button4.setAttribute("onclick", "juistenummer(); slot.push('2')");
		button5.setAttribute("onclick", "gang3();");
	button3.style.display = "block";
	button4.style.display = "block";
	button5.style.display = "block";
}


function verkeerdenummer() {
	title.innerHTML = "Het verkeerde nummer";
	p.innerHTML = "Dit is het verkeerde nummer. GAME OVER.";
	image.src = "img/piramide.5.jpg";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function juistenummer() {
	title.innerHTML = "Gang 4";
	p.innerHTML = "Dit is het juiste nummer en de deur gaat open. Links van je zie je een krat dat je zou kunnen breken met een breekijzer en rechts van je een gat in het dak waar je doorheen zou kunnen als je een ladder had.";
	image.src = "img/piramide.2.jpg";
	if (lader2.length <= 1) {
		image5.style.display = "none";
	} else {
		image5.style.display = "inline";
	}
	button1.innerHTML = "plaats de ladder.";
	button2.innerHTML = "Pak de ladder.";
	button3.innerHTML = "Ga naar boven.";
	button5.innerHTML = "Ga terug.";
		button1.setAttribute("onclick", "plaatsLadder();");
		button2.setAttribute("onclick", "pakLadder();");
		button3.setAttribute("onclick", "ladder2();");
		if (slot.length <= 1) {
			button5.setAttribute("onclick", "gang3();");
		} else {
			button5.setAttribute("onclick", "beeldenkamer();");
		}
	button1.style.display = "block";
	button2.style.display = "block";
	button3.style.display = "block";
	button4.style.display = "none";
	button5.style.display = "block";
	button6.style.display = "none";
}

function plaatsLadder() {
	if (boven.length <= 1) {
		alert("Je hebt geen ladder.");
	} else {
		image5.style.display = 'inline';
		lader2.push('2');
		boven.splice(1, 1);
	}
}

function pakLadder() {
	if (boven.length <= 1) {
		boven.push('2');
		image5.style.display = 'none';
	} else {
		alert("Er staat geen ladder om op te pakken.");
	}
}


function ladder2() {
	if (boven.length <= 1) {
		boven1();
	} else {
		alert('Er staat geen ladder.');
	}
}

/*
function geheim() {
	title.innerHTML = "Geheime kamer";
	p.innerHTML = "Je bent in een geheime kamer met een sleutel op de grond.";
	image.src = "img/piramide.geheim.jpg";
	button1.innerHTML = "pak de pharao's sleutel.";
	button2.innerHTML = "Ga terug";
		button2.setAttribute("onclick", "juistenummer();");
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}
*/

function boven1() {
	title.innerHTML = "Bovenste ruimte";
	p.innerHTML = "Je bent in een kamer met voor je een grote deur en links van je een deur.";
	image.src = "img/piramide.15.jpg";
	image5.style.display = "none";
	button1.innerHTML = "Ga door de linkse deur.";
	button2.innerHTML = "Ga naar de grote deur.";
	button3.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "opslag();");
		button2.setAttribute("onclick", "dedeur();");
		button3.setAttribute("onclick", "juistenummer();");
	button3.style.display = "block";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function opslag() {
	title.innerHTML = "Opslagkamer";
	p.innerHTML = "Je bent in een lege kamer met rechts 1 deur.";
	image.src = "img/piramide.16.jpg";
	button1.innerHTML = "open de deur.";
	button2.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "hal();");
		button2.setAttribute("onclick", "boven();");
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function hal() {
	title.innerHTML = "Gang 5";
	p.innerHTML = "zodra je de volgende kamer binnen gaat, gaat de deur achter je dicht en zit je vast in erg lange kamer. GAME OVER.";
	image.src = "img/piramide.5.jpg";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function dedeur() {
	title.innerHTML = "Gesloten deur";
	p.innerHTML = "De deur is op slot en kan niet worden geopend met een sleutel.";
	image.src = "img/piramide.14.jpg";
	button1.innerHTML = "Breek de deur open met het breekijzer.";
	button2.innerHTML = "Ga terug";
	if (ijzer.length <= 1) {
		button1.setAttribute("onclick", "alert('Je hebt geen breekijzer.')");
	} else {
		button1.setAttribute("onclick", "pharao();");
	}
		button2.setAttribute("onclick", "boven1();");
	button1.style.display = "block";
	button2.style.display = "block";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}


function pharao() {
	title.innerHTML = "De pharao's kamer";
	p.innerHTML = "Je bent nu in de pharao's kamer. De sarcofaag is open en je ziet iets liggen.";
	image.src = "img/piramide.4.jpg";
	image7.src = "img/piramide.orb.png";
	button1.innerHTML = "Pak de bol";
	button2.innerHTML = "Ga terug";
		button1.setAttribute("onclick", "image7.style.display = 'none'; einde.push('2')");
		button2.setAttribute("onclick", "boven1();");
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";
	button6.style.display = "none";
}
