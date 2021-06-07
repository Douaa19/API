

var input = document.getElementById("text");
var inputValue = document.getElementById("text").value;
var submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
    e.preventDefault();
    var paragraphe = document.getElementById("p");
    var inputValue = document.getElementById("text").value;
    
    var request = new XMLHttpRequest;
    var url = `https://api.github.com/users/${inputValue}/repos`;

    request.open('GET', url, true);

    request.onload = function () {
        var data = JSON.parse(this.response)

        data.forEach((repos) => {
            
            console.log(repos.name)

        });
    }

request.send();

})







