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
    and inside that function loop through the results and log each 
    elephant's name.

    In the "catch" method of your code, redirect to "error.html" if there 
    is an error.

    `https://elephant-api.herokuapp.com/elephants`    */

    const baseUrl = "https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants";
    const elephantUrl = `${baseUrl}elephants`;

    fetch(elephantUrl)
        .then(function (response) {

            return response.json();

        })

        .then(function (json) {

            loadElephants(json);

        })

        .catch(function (error) {

            console.dir(error);

        });


//  QUESTION 3
/*  Refer: lesson 3
    Replace the word cats with the word giraffes in the following sentence:

    "These cats are outrageous."     
    
    <div class="cats">
        <p>"These cats are outrageous."</p>
    </div>
    <hr>                                               */

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

        https://my.site.com?userId=7      */

    function testFunctionHere() {
        console.log(answer);
    }

        
//  QUESTION 5
/*  Refer: lesson 4
    Write code that removes the button, and only the button, from its 
    parent element in the HTML below:

    <div class="container">
        <p>Lorem ipsum dolor</p>
        <button class="btn">Click me</button>
    </div>                                                     */

    function testFunctionHere() {
        console.log(answer);
    }


//  QUESTION 6
/*  Refer: lesson 4
    Create an li element with a text value of Parrots and a class of 
    parrots.

    Add the new item as the second item in the ul below(add it after Cows).

    < ul class="animals" >
        <li class="cows">Cows</li>
        <li class="elephants">Elephants</li>
    </ul >                                             */

    function testFunctionHere() {
        console.log(answer);
    }


//  QUESTION 7
/*  Refer: lesson 4
    Make a call to the URL below and pass the JSON it returns to a 
    function.

    Inside that function select the div from the HTML below and assign 
    the rating property from the JSON object as it's text value.

    In the catch method, log the error that may be returned.

    `https://api.rawg.io/api/games/3801`
        < div class="rating" ></div >                          */

    function testFunctionHere() {
        console.log(answer);
    }


