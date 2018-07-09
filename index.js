
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


var randomAmountOfPeople;
var people;

function randomPeople () {
    randomAmountOfPeople = Math.floor((Math.random() * 10) + 1);
    document.getElementById("p1").innerHTML = randomAmountOfPeople;
    getAdjectives(randomAmountOfPeople*5);
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
    var survivors = randomAmountOfPeople - Math.floor((Math.random() * randomAmountOfPeople) + 1);
    if(survivors == 1) {
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

function getAdjectives(amountOfAdjectivesToGet=5) {

var $adjectives = $('#adjectives');

    $.ajax({
    type: 'GET',
    url: 'https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=adjective&minCorpusCount=1000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit='+amountOfAdjectivesToGet+'&api_key=f7ec2673a7ba9341f00070c0a310da46dffad4b2644f7606b',
        success: function(data) {
      
       $.each(data, function(index, adj){
        $adjectives.append( adj.word + ', ' );
       });
    }

    });
}