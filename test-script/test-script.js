//  QUESTION 2
/*  Refer: lesson 2 / 4
    Make a call to the URL below, pass the JSON it returns to a function
    and inside that function loop through the results and log each
    elephant's name.

    In the "catch" method of your code, redirect to "error.html" if there
    is an error.

    `https://elephant-api.herokuapp.com/elephants`
        < div class="results" ></div > */

/*
const elephantUrl = "https://elephant-api.herokuapp.com/elephants";

const elephantNamesFromUrl = `${elephantUrl}elephantNames`;

fetch(elephantNamesFromUrl)
    .then(function(response) {
        return response.json();
    })

    .then(function(json) {
        loadElephants(json);
    })

    .catch(function(error){
        console.log("error.html");
    }) */

function loadGames(json) {
    const games = json.results;
}

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

function loadPage(event) {
    console.log(this.dataset.genre);
}



    


    

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

