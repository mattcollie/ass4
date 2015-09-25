function themeSet(){
	var value = window.localStorage.getItem('theme');
	var sel = document.getElementById("themechanger");
	for(var i = 0, j = sel.options.length; i < j; ++i) {
        if(sel.options[i].innerHTML.toLowerCase() == value.toLowerCase() + ' theme') {
           sel.selectedIndex = i;
		   themechanger({value:value});
           break;
        }
    }
	
}

function themechanger(e){
	
	window.localStorage.setItem('theme', e.value);
	
	switch(e.value){
	case'dark':
		loadjscssfile("css/theme_dark.css", "css");
		break;
	case'red':
		loadjscssfile("css/theme_red.css", "css");
		break;
	case'green':
		loadjscssfile("css/theme_green.css", "css");
		break;
	case'blue':
		loadjscssfile("css/theme_blue.css", "css");
		break;
	case'purple':
		loadjscssfile("css/theme_purple.css", "css");
		break;
	}
	
	var sel = document.getElementById("themechanger");
	for(var i = 0, j = sel.options.length; i < j; ++i) {
        if(sel.options[i].innerHTML.toLowerCase() == e.value.toLowerCase()) {
           sel.selectedIndex = i;
		   alert(i);
           break;
        }
    }
}

function loadjscssfile(filename, filetype){
	if (filetype=="js"){ //if filename is a external JavaScript file
		var fileref=document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", filename);
	}
	else if (filetype=="css"){ //if filename is an external CSS file
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref!="undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
}
