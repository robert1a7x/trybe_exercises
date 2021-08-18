const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
}

test("verifica se os repos 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' estao na lista de resultado", () => (
  getRepos('https://api.github.com/orgs/tryber/repos').then((response) => {
    expect(response).toContain('sd-01-week4-5-project-todo-list');
    expect(response).toContain('sd-01-week4-5-project-meme-generator');
  })
))