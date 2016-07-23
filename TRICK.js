// a script to play a trick

function setWindowPage() {
    window.location.href = getPage();
    }

function getPage() {
	// all the html files in this directory/repo
    var pages = ["haixi.html", "hello_map.html", "home.html", "doggie.html", "index.html", "catmapper.html"];
                // get page at a random index in the array of pages in the directory
    return pages[Math.floor(Math.random() * pages.length)];
    }

function trick() {
	console.log('this is kinda dumb');
	window.setTimeout(setWindowPage, Math.floor(Math.random() * 100000));
}

window.addEventListener('load', trick);
