### • GitHub API Profile
> Projeto de estudo utilizando a linguagem de programação javascript para consumo da API do GitHub

### • API utilizada no projeto:
##### - `Github`
> - Documentação: https://docs.github.com/pt/rest
> - Descrição: API pública do github para cosntrução de aplicações poderosas
> - Tipos de retorno: json

### • Consumo da API:
```javascript
const F_userGithub = async() => {
    const user = document.getElementById('usergithub').value;
    const url = `https://api.github.com/users/${user}`;
    const promise_data = await fetch(url);
    const data = await promise_data.json();
    enter_data(data)
}

document.getElementById('click').addEventListener('click',F_userGithub);
```
