var g_leftPercent;
var g_rightPercent;
var g_leftDivID;
var g_rightDivID;
var g_currentLeftPercent;
var g_currentRightPercent;
var g_leftElement;
var g_rightElement;
var g_timeout = 5;
var g_increment = 6;

function slideLeft(leftDivID, rightDivID, leftPercent, rightPercent) {
	g_leftElement = document.getElementById(g_leftDivID);
	g_rightElement = document.getElementById(g_rightDivID);

	g_leftPercent = leftPercent;
	g_rightPercent = rightPercent;
	g_leftDivID = leftDivID;
	g_rightDivID = rightDivID;

	var leftWidth = g_leftElement.offsetWidth;
	var rightWidth = g_rightElement.offsetWidth;
	var total = leftWidth + rightWidth;

	g_currentLeftPercent = (leftWidth / total) * 100;
	g_currentRightPercent = (rightWidth / total) * 100;

	slideLeftImpl();
}

function slideLeftImpl() {
	var done = false;

	g_currentLeftPercent = g_currentLeftPercent - g_increment;
	if (g_currentLeftPercent < g_leftPercent) {
		g_currentLeftPercent = g_leftPercent;
		done = true;
	}

	g_currentRightPercent = g_currentRightPercent + g_increment;
	if (g_currentRightPercent > g_rightPercent) {
		g_currentRightPercent = g_rightPercent;
		done = true;
	}

	g_leftElement.style.width = g_currentLeftPercent + "%";
	g_rightElement.style.width = g_currentRightPercent + "%";

	if (done) {
		return;
	}

	setTimeout('slideLeftImpl()', g_timeout);

	return;
}

function slideRight(leftDivID, rightDivID, leftPercent, rightPercent) {
	g_leftPercent = leftPercent;
	g_rightPercent = rightPercent;
	g_leftDivID = leftDivID;
	g_rightDivID = rightDivID;
	g_leftElement = document.getElementById(g_leftDivID);
	g_rightElement = document.getElementById(g_rightDivID);

	var leftWidth = g_leftElement.offsetWidth;
	var rightWidth = g_rightElement.offsetWidth;
	var total = leftWidth + rightWidth;

	g_currentLeftPercent = (leftWidth / total) * 100;
	g_currentRightPercent = (rightWidth / total) * 100;

	slideRightImpl();
}

function slideRightImpl() {
	var done = false;

	g_currentLeftPercent = g_currentLeftPercent + g_increment;
	if (g_currentLeftPercent > g_leftPercent) {
		g_currentLeftPercent = g_leftPercent;
		done = true;
	}

	g_currentRightPercent = g_currentRightPercent - g_increment;
	if (g_currentRightPercent < g_rightPercent) {
		g_currentRightPercent = g_rightPercent;
		done = true;
	}

	g_leftElement.style.width = g_currentLeftPercent + "%";
	g_rightElement.style.width = g_currentRightPercent + "%";

	if (done) {
		return;
	}

	setTimeout('slideRightImpl()', g_timeout);

	return;
}

function printHTML(html) {

	alert(html);
	
	var printWin = window.open("","printSpecial");
	printWin.document.open();
	printWin.document.write(html);
	printWin.document.close();
	printWin.print();	
	
}


function printAll() {
	window.print();
}
