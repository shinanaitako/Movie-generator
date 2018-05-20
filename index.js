
var genres = [
    'drama',
    'horror',
    'comedy',
    'romance',
    'action',
    'thriller',
    'fantasy',
    'sci-fi',
    'crime',
    'musical',
    'silent movie',
    'live action anime'
]

function randomGenre () {
    var randomGen = Math.floor(Math.random() * (genres.length));
    document.getElementById("genre").innerHTML = genres[randomGen];
}


var randomNumber;

function randomPeople () {
    randomNumber = Math.floor((Math.random() * 10) + 1);
    document.getElementById("p1").innerHTML = randomNumber;
}



var locations = [
    'cabin in the woods', 
    'haunted house',
    'cellar',
    'lake',
    'dark alleyway',
    'abandoned hospital'
]

function randomLocation () {
    var randomLoc = Math.floor(Math.random() * (locations.length));
document.getElementById("location").innerHTML = locations[randomLoc];
}


function randomSurvivors () {
    var survivors = randomNumber - Math.floor((Math.random() * randomNumber) + 1);
    if(survivors < 2) {
        survivors += " survives";
    }
    else {
        survivors += " survive";
    }
    document.getElementById("p2").innerHTML = survivors;
}



function refreshData() {
    randomGenre();
    randomPeople();
    randomLocation();
    randomSurvivors();
}
refreshData();