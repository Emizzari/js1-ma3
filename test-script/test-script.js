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

    /*const url = "https://my.site.com?userId=7";

    fetch(url)
        .then(function (response) {
            return response.json();
        })

        .then(function (json) {
            loadGames(json);
        })

        .catch(function (error) {
            console.dir(error);

            
        }); 


    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);

    let id;

    if (params.has("id")) {
        id = params.get("id");
    } else {
      //  document.location.href = " ";
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

