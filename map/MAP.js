var map_button = undefined;
var map_dialog = undefined;
var map_dimmer = undefined;

//TODO (from cookies)
var places = ["", "fighter.html", "cow.html", "snail.html", "dogclick.html",];

function createMapButton(){
	deleteMapDoms();
	
	map_button = document.createElement("img");
	map_button.src = 'map/map.png';
	map_button.className = "map_button";
	
	//set the onclick event
	map_button.onclick = createMapDialog;

	document.body.appendChild(map_button);
}

function createMapDialog(){	
	createMapDimmer();
	
	map_dialog = document.createElement("div");
	map_dialog.className = "map_dialog";
	
	populateMap();
	
	document.body.appendChild(map_dialog);
}

function createMapDimmer(){
	map_dimmer = document.createElement("div");
	map_dimmer.className = "map_dimmer";
	map_dimmer.onclick = createMapButton;
	
	document.body.appendChild(map_dimmer);
}

function deleteMapDoms(){
	if (map_button !== undefined)
		document.body.removeChild(map_button);
	map_button = undefined;
	if (map_dialog !== undefined)
		document.body.removeChild(map_dialog);
	map_dialog = undefined;
	if (map_dimmer !== undefined)
		document.body.removeChild(map_dimmer);
	map_dimmer = undefined;
}

function travelToSelected(){
    var e = document.getElementById("map_place_selector");
    var place = e.options[e.selectedIndex].text;
    console.log("traveling to... " + place);
    setPageByUrl(place);
    
    createMapButton();
}

function travelRandomly(){
    setRandomPage();
    
    createMapButton();
}

function populateMap(){
	var text = document.createElement("span");
	text.innerHTML = "map";
	text.style.fontSize = "200%";
	text.style.color = "#0044ff";
	map_dialog.appendChild(text);
	
	var map_x = document.createElement("span");
	map_x.innerHTML = "x";
	map_x.className = "map_x";
	map_x.onclick = createMapButton;
	map_dialog.appendChild(map_x);
	
	map_dialog.appendChild(document.createElement("br"));
	map_dialog.appendChild(document.createElement("br"));
	map_dialog.appendChild(document.createElement("br"));
	
	map_dialog.appendChild(document.createTextNode("places you've seen..."));
	map_dialog.appendChild(document.createElement("br"));
	map_dialog.appendChild(document.createElement("br"));
	//create places dropdown
	var places_dom = document.createElement("select");
    places_dom.id = "map_place_selector";
	for (var i = 0; i < places.length; i++){
		var place_dom = document.createElement("option");
		place_dom.innerHTML = places[i];
		place_dom.value = places[i];
		places_dom.appendChild(place_dom);
	}
	map_dialog.appendChild(places_dom);
	
	var places_button = document.createElement("button");
	places_button.innerHTML = "travel here";
    places_button.onclick = travelToSelected;
	map_dialog.appendChild(places_button);
	
	map_dialog.appendChild(document.createElement("br"));
	map_dialog.appendChild(document.createElement("br"));
	map_dialog.appendChild(document.createElement("br"));
	map_dialog.appendChild(document.createElement("br"));
	
	
	//TRAVEL RANDOMLY (trick?)
	map_dialog.appendChild(document.createTextNode("travel somewhere new...b"));
	map_dialog.appendChild(document.createElement("br"));
	var new_button = document.createElement("button");
	new_button.innerHTML = "teleport";
    new_button.onclick = travelRandomly;
	map_dialog.appendChild(new_button);
}

//NOW, finally call your create map button function!!
createMapButton();