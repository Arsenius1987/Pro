//не скрывайте (display:block) элементы в правой части экрана
function print(argument) {
	let out = document.getElementById(argument);
	out.classList.toggle("displayBlock");
}
function printNone(argument) {
	let out = document.getElementById(argument);
	out.classList.toggle("displayNone");
}
// отслеживать события нажатия кнопки задач
let buttons = document.getElementsByName("tasks");
for (var i = 0; i < buttons.length; i += 1) {
	buttons[0].addEventListener('click', functionCombinationRandomNumber);
	buttons[1].addEventListener('click', functionCombinationCoordinates);
	buttons[2].addEventListener('click', functionCombinationHideShowText);
	buttons[3].addEventListener('click', tabsOn);
	buttons[4].addEventListener('click', RemoveNews);
	buttons[5].addEventListener('click', progressAdd);
}
// track click events button of function
let randomNewGenerate = document.getElementById('randomMore');
randomNewGenerate.addEventListener('click', generatorRandomNumber);
// functions to  combination solve quests
function functionCombinationRandomNumber() {
	print('randomNumber');
	generatorRandomNumber();
}
function functionCombinationCoordinates() {
	print('coordinates');
	coordinates();
}
function functionCombinationHideShowText() {
	print('hideShow');
	HideShowText();
}
function functionCombinationRemoveNews() {
	printNone('news');
}
// functions to solve quests
function generatorRandomNumber() {
	let numberGenerator = Math.floor(Math.random() * 100);
	let outWrite = document.getElementById('out-number');
	outWrite.innerHTML = numberGenerator;
}
function coordinates() {
	window.addEventListener('mousemove', function (e) {
		document.getElementById('xCoordinatesMouse').textContent = e.x;
		document.getElementById('yCoordinatesMouse').textContent = e.y;
	});
}
function HideShowText() {
	print('textHideShow');
}
function RemoveNews() {
	print('news');
}
function progressAdd() {
	print('progressAdd');
}
function tabsOn() {
	print('wrapperTabs');
}
// listener
let hideShowButton = document.getElementById('hideShowButton').addEventListener('click', HideShowText),
	removeAllNews = document.getElementById('news').addEventListener('click', functionCombinationRemoveNews),
	progress = document.getElementById('progressbar').addEventListener('click', () => {
		document.getElementById('progress').value += 5;
	});
let tabsButtons = document.querySelectorAll('.tablinks');
for (var i = 0; i < tabsButtons.length; i += 1) {
	tabsButtons[i].addEventListener('click', function (e) {
		// e.target.style.background = "red";
		openCity(e, e.target.value);
	});
}
function openCity(evt, cityName) {
	// Объявите все переменные
	var i, tabcontent, tablinks;
	// Получите все элементы с помощью class="tabcontent" и скройте их.
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	// Получите все элементы с class="tablinks" и удалите класс "active".
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	//Показать текущую вкладку и добавить «активный» класс к кнопке, открывающей вкладку.
	let noop = document.getElementById(cityName).style.display = 'block';
	evt.currentTarget.className += " active";
}
