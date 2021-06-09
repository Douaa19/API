
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container)


var input = document.getElementById("text");
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


                // Create an image for avatar
                // const avatar = document.createElement('img')
                // avatar.src = `${repos.owner.avatar_url}`


                // Create an h1 and set the text content to the repo's name
                const h1 = document.createElement('h1')
                h1.textContent = repos.name


                // Create a p and set the text content to the repo's description
                const p = document.createElement('p')
                repos.description = repos.description//Limit to 300 chars
                p.textContent = `${repos.description}...`//End with an ellipses


                // Create a span and set the text content to the repo's star
                const stars = document.createElement('span')
                stars.textContent = `Stars: ${repos.stargazers_count}`
                stars.setAttribute('class', 'span1')


                //Create a span and set the text content to the repo's issue
                const issues = document.createElement('span')
                issues.textContent = `Issues: ${repos.open_issues_count}`
                issues.setAttribute('class', 'span2')


                // Append the cards to the container element
                container.appendChild(card)


                // Each card will contain avatar
                // card.appendChild(avatar)


                // Apped the content to the card
                const content = document.createElement('div')
                content.setAttribute('class', 'content')


                // 
                card.appendChild(content)

                
                // Creat new div
                const ele1 = document.createElement('div')
                ele1.setAttribute('class', 'ele1')


                // 
                content.appendChild(ele1)


                // 
                ele1.appendChild(h1)
                ele1.appendChild(p)


                // 
                const ele2 = document.createElement('div')
                ele2.setAttribute('class', 'ele2')


                // 
                content.appendChild(ele2)


                // 
                ele2.appendChild(stars)
                ele2.appendChild(issues)

            })
        }else {
            const errorMessage = document.createElement('message')
            errorMessage.textContent = `Not working`
            app.appendChild(errorMessage)
        }

    }

request.send();

})







