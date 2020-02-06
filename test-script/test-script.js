

//  QUESTION 6
/*  Refer: lesson 4
    Create an li element with a text value of Parrots and a class of 
    parrots.

    Add the new item as the second item in the ul below(add it after Cows).

    < ul class="animals" >
        <li class="cows">Cows</li>
        <li class="elephants">Elephants</li>
    </ul > 
                                                */

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
    - and assign the rating property FROM the JSON object as it's text value.

    - In the catch method, log the error that may be returned.

    `https://api.rawg.io/api/games/3801`
        < div class="rating" ></div >                          */

    const url = "https://api.rawg.io/api/games/3801";

    fetch(url)
        .then(function (response) {
            return response.json();
        })

        .then(function (json) {
            ratingProperty(json);
        })

        .catch(function (error) {
            console.dir(error);
        });

    function ratingProperty(json) {
        const container = document.querySelector(".rating");

        if (json.results) {
            for (let i in json.results) {
                console.log(json.results[i].name);
            }
        }
    
        container.innerHTML = url.container;

        const ratingContent = document.createTextNode("Insert rating property here?");

        container.innerText = `Rating: ${container.rating}`

        


        container.appendChild(ratingContent);

        console.dir(object);

    }

