// RANDOM QUOTE MACHINE
// PROJECT 3: FRONT END CERTIFICATION @ FREECODECAMP.COM
// AUTHOR NICHOLAS D'AMICO @ NICHOLASDAMICO.NET
// SEPT 29, 2016


/////////////////////////////////////////////////////////
////////	VARIABLES GLOBAL SCOPE
/////////////////////////////////////////////////////////

var quote = document.querySelector(".quote");
var quoteSource = document.querySelector(".source");
var quoteBtn = document.querySelector("#getRandomQuote");
var tweetBtn = document.querySelector("#tweetQuote");

var viewedQuotes = [];
var currentQuote = quote.textContent;
var currentSource = quoteSource.textContent;



/////////////////////////////////////////////////////////
////////	EVENT LISTENERS
/////////////////////////////////////////////////////////

//	QUOTEBTN CALLS PRINTQUOTE() ON CLICK.
quoteBtn.addEventListener("click", printQuote);

//	TWEETBTN OPENS TWITTER AND INSERTS CURRENT QUOTE AND SOURCE.
tweetBtn.addEventListener("click", function(){
	window.open('http://twitter.com/intent/tweet?text=' + currentQuote + " -" + currentSource);
});


/////////////////////////////////////////////////////////
////////	FUNCTIONS
/////////////////////////////////////////////////////////


// GENERATES RANDOM NUMBER ACCEPTS ARGUMENT.
function randomNumber(highNum) {
	return Math.floor(Math.random() * highNum);
}

// SELECTS A RANDOM QUOTE FROM QUOTES OBJECT ARRAY.
function randomQuote() {
	// SELECTS QUOTE FROM quotes ARRAY.
	// SPLICES/ REMOVES FROM QUOTES ARRAY ONCE SELECTED.
	var spliceQuote = quotes.splice(randomNumber(quotes.length), 1)[0];

	// CHECKS IF QUOTES ARRAY IS EMPTY.
	if(quotes.length === 0) {
		// IF EMPTY, MOVES QUOTE OBJECTS BACK TO QUOTES ARRAY.
		// FROM THE VIEWEDQUOTES ARRAY
		quotes = viewedQuotes;
		// CLEAR ALL QUOTES FROM VIEWEDQUOTES.
		viewedQuotes = [];
	}
	// REMOVE AND PUSH QUOTE TO viewedQuote Array.
	viewedQuotes.push(spliceQuote);

	return spliceQuote;
}

// BUILDS HTML QUOTE BLOCK STRING
function buildQuote(quote) {
	// BUILDS QUOTE BLOCK STRING
	var message = "<p class='source'>- " + quote.source;
	message += "<span class='citation'>" + quote.citation + "</span>";
	message += "<span class='year'>" + quote.year + "</span></p>";
	// RETURN HTML QUOTE BLOCK STRING
	return message;
}


function printQuote() {
	// STORES SELECTED QUOTE.
	var selectedQuote = randomQuote();
	// TWEETS CURRENT QUOTE.
	currentQuote = selectedQuote.quote;
	// TWEETS CURRENT QUOTE SOURCE.
	currentSource = selectedQuote.source;
	// DISPLAYS SELECTED QUOTE ON PAGE.
	quote.textContent = selectedQuote.quote;
	// QUOTE SOURCE BUILDER
	// DISPLAYS SELECTED QUOTE INFO ON PAGE.
	quoteSource.innerHTML = buildQuote(selectedQuote);
}
