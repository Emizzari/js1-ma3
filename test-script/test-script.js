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





    


    

    /*
const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games`;

fetch(gamesUrl)
    .then(function (response) {

        return response.json();

    })

    .then(function (json) {

        loadGames(json);

    })

    .catch(function (error) {

        console.dir(error);

    });

function loadGames(json) {
    console.dir(json);
    const games = json.results;
}

*/

