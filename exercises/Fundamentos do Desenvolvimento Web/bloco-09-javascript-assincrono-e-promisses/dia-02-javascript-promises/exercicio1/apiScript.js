// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const insertJoke = (joke) => {
	const h2 = document.querySelector('#jokeContainer');
	h2.innerHTML = joke;
}

const fetchJoke = () => {
  const object = {
		method: 'GET',
		headers: {'Accept': 'application/json'}
	}

	fetch(API_URL, object).then(response => response.json())
	.then(data => insertJoke(data.joke))
};

window.onload = () => fetchJoke();