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

