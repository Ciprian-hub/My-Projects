const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const title = document.getElementsByTagName('h3')

jokeBtn.addEventListener('click', generateJoke)

function generateJoke() {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => joke.innerHTML=data.joke)
}