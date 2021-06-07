
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container)


var input = document.getElementById("text");
var inputValue = document.getElementById("text").value;
var submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
    e.preventDefault();

    var inputValue = document.getElementById("text").value;
    
    var request = new XMLHttpRequest;
    var url = `https://api.github.com/users/${inputValue}/repos`;

    request.open('GET', url, true);

    request.onload = function () {
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            data.forEach((repos) => {
                // Create a div with a card class
                const card = document.createElement('div')
                card.setAttribute('class', 'card')

                // Create an h1 and set the text content to the repo's name
                const h1 = document.createElement('h1')
                h1.textContent = repos.name

                // Create ap and set the text content to the repo's description
                // const p = document.createElement('p')
                // repos.description = repos.description//Limit to 300 chars
                // p.textContent = `${repos.description}...`//End with an ellipses


                // Append the cards to the container element
                container.appendChild(card)


                // Each card will contain an h1 and p
                card.appendChild(h1)
                // card.appendChild(p)

            })
        }else {
            const errorMessage = document.createElement('message')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
        }

    }

request.send();

})







