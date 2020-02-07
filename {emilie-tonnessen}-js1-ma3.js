//  JAVASCRIPT 1 - MODULE ASSIGNMENT 3
//  QUESTION 1
/*  Refer: lesson 1
    Convert the function below to an arrow function:

    function(a, b) {
        return a - b;
    } */

    (a, b) => { return a - b; }

    
//  QUESTION 2
/*  Refer: lesson 2 / 4
    Make a call to the URL below, pass the JSON it returns to a function
    and inside that function loop through the results and log each game's name.

    In the catch method of your code, redirect to error.html if there is an error.

    `https://elephant-api.herokuapp.com/elephants`    */

    function loadGames(json) {
        if (json.results) {
            for (let i in json.results) {
                console.log(json.results[i].name);
            }
        }
    }

    const url = "https://api.rawg.io/api/games?genres=sports";

    fetch(url)
        .then(function (response) {
            return response.json();
        })

        .then(function (json) {
            loadGames(json);
        })

        .catch(function (error) {
            console.dir(error);

            document.location.href = "error.html";
        });


//  QUESTION 3
/*  Refer: lesson 3
    Replace the word cats with the word giraffes in the following sentence:

    "These cats are outrageous."                                     */

    let sentenceOutrageousCats = "These cats are outrageous.";

    var changeCatsToGiraffes = sentenceOutrageousCats.replace(/cats/g, "giraffes");


//  QUESTION 4
/*  Refer: lesson 4
    Given the URL below, write code that checks if there is a userId 
    parameter in the query string.

    If there is no userID parameter, redirect the browser to third.html.

    If there is a userID parameter and its value is less than 10, 
    redirect to first.html.

    If there is a userID parameter and its value is 10 or greater, 
    redirect to second.html.

    https://my.site.com?userId=7 */

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);

    let userId;

    if (params.has(userId)) {
        userid = params.get("userId");
    }

    if (userId < 10) {
        document.location.href = "first.html";
    } else if (userId >= 10) {
        document.location.href = "second.html"
    } else {
        document.location.href = "third.html"
    }

        
//  QUESTION 5
/*  Refer: lesson 4
    Write code that removes the button, and only the button, from its 
    parent element in the HTML below:

    <div class="container">
        <p>Lorem ipsum dolor</p>
        <button class="btn">Click me</button>
    </div>                                                     */

    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");

    container.removeChild(button);


//  QUESTION 6
/*  Refer: lesson 4
    Create an li element with a text value of Parrots and a class of 
    parrots.

    Add the new item as the second item in the ul below(add it after Cows).

    < ul class="animals" >
        <li class="cows">Cows</li>
        <li class="elephants">Elephants</li>
    </ul >                                             */

    const animalsContainer = document.querySelector(".animals");

    const cows = document.querySelector(".cows");

    const parrots = document.createElement("li");

    parrots.className = "parrots";

    const liContent = document.createTextNode("Parrots");

    parrots.appendChild(liContent);

    animalsContainer.appendChild(parrots);

    cows.after(parrots);


//  QUESTION 7
/*  Refer: lesson 4
    - Make a call to the URL below 
    - and pass the JSON it returns to a function.

    - Inside that function select the div from the HTML below 
    - and assign the "rating" property FROM the JSON object as it's text value.

    - In the catch method, log the error that may be returned.

    https://api.rawg.io/api/games/3801

    < div class="rating" ></div >  */

    // Making a call to the URL:
    const GamesUrl = "https://api.rawg.io/api/games/3801";

    // Creating JSON (??):
    fetch(GamesUrl)
        .then(function (response) {
            return response.json();
        })

        .then(function (json) {
            createRating(json);
        })

        // Logging an error that may be returned:
        .catch(function (error) {
            console.dir(error);
        });

    // Creating the function
    function createRating(json) {

        // Selecting the <div> element from HTML document:
        const ratingContainer = document.querySelector(".rating");

        // Create a <p> element to contain the ratings (for personal preference):
        const rating = document.createElement("p");

        // Adding the <p> element after the <div>
        ratingContainer.appendChild(rating);

        // Adding text and rating property from the JSON object:
        rating.innerText = `Rating: ${json.rating}`;
    }


