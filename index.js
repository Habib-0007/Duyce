let quotes = [
    {
        quote: "Success is most often achieved by those who don’t know that failure is inevitable." ,
        author: "Coco Channel"
    },

    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney"
    },

    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },

    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },

    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },

    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },

    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on",
        author: "Franklin D. Roosevelt"
    },

    {
        quote: "Always remember that you are absolutely unique. Just like everyone else",
        author: "Margaret Mead"
    },

    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },

    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },

    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },

    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author: "Helen Keller"
    },

    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },

    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
    },

    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail",
        author: "Ralph Waldo Emerson"
    },

    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },

    {
       quote: "In the end, it's not the years in your life that count. It's the life in your years",
       author: "Abraham Lincoln"
    },

    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },

    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },

    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up",
        author: "Thomas A. Edison"
    },

    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
        author: "Dr. Seuss"
    },

    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },

    {
        quote: "In this life we cannot do great things. We can only do small things with great love.",
        author: "Mother Teresa"
    },

    {
        quote: "Only a life lived for others is a life worthwhile",
        author: "Albert Einstein"
    },

    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },

    {
        quote: "You only live once, but if you do it right, once is enough",
        author: "Mae West"
    },

    {
        quote: "Live in the sunshine, swim the sea, drink the wild air",
        author: "Ralph Waldo Emerson"
    }
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value

function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
	var quotes = getRandomQuote ();
	var quoteContent = document.querySelector("#quote q");
        var quoteAuthor = document.getElementById("author");
        var icons = document.querySelectorAll("footer li a");
        var quoteString = ` <p> ${quotes.quote} </p>`;
        
        var author = ` <p> -${quotes.author} </p>`;
		    quoteContent.innerHTML = quoteString;
                    quoteAuthor.innerHTML = author;

        document.body.style.background = getRandomColor();

        for (let index = 0; index < icons.length; index++) {
             icons[index].style.color = getRandomColor(); 
        }
        
    }

function copyQuote () {
	
	var quoteContent = document.querySelector("#quote q");
        var quoteAuthor = document.getElementById("author");
	
	var quoteString = `${quotes.quote}`;
        var author = `-${quotes.author}`;
	
	quoteContent.innerHTML = quoteString;
        quoteAuthor.innerHTML = author;
	
	q = quoteContent.innerHTML;
	a = quoteAuthor.innerHTML;

 	var quoteText = q.innerText;
	var authorName = a.innerText;
	
	navigator.clipboard.writeText(`${quoteText} ${quoteAuthor.textContent}`);

	alert(`Quote by ${authorName} copied to clipboard`);
}

document.querySelector("#copy i").addEventListener("click", copyQuote);

//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("change").addEventListener("click", printQuote, false);
