// Select CSS 
const base_url = window.location.origin;
const pathArray = window.location.pathname.split( '/' );
alert(pathArray.length);
const highcontrast = base_url+"/css/mainhighcontrast.css";
const defaultcss  = base_url+"/css/main.css";

function swapStyleSheet(sheet) {
	document.getElementById("pagestyle").setAttribute("href", sheet);  
}
function selectHighContrast() {
	localStorage.setItem("contrast-theme", highcontrast );
	swapStyleSheet(highcontrast);
}

function selectDefault() {
	localStorage.setItem("contrast-theme", defaultcss );
	swapStyleSheet(defaultcss);
}

function toggleHighContrast() { alert(highcontrast);
	const storedContrast = localStorage.getItem("contrast-theme");
	if (storedContrast == defaultcss) {
		selectHighContrast();
	} else {
		selectDefault();
	}
}
const storedContrast = localStorage.getItem("contrast-theme");
if (storedContrast) {
	swapStyleSheet(storedContrast);
}

/*
<img src=... onclick="toggleHighContrast()"/>
   <button id="defaultstyle" onclick="selectDefault();">Default Style Sheet</button>
   <button id="highcontraststyle" onclick="selectHighContrast();">High-Contrast Style Sheet</button>
 */
