const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


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