'use strict';

const enter_data = (data) => {
    
    if ('message' in data){
        alert("Usuário não encontrado");
        document.getElementById('usergithub').value = "";
        document.getElementById('nome').value = "";
        document.getElementById('user').value = "";
        document.getElementById('localidade').value = "";
        document.getElementById('reps').value = "";
        document.getElementById('avatar').
            src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
        document.getElementById('email').value = "";
        document.getElementById('twitter').value = "";
        document.getElementById('seguindo').value = ""
        document.getElementById('seguidores').value = "";
        document.getElementById('site').value = "";
        document.getElementById('empresa').value = "";
        document.getElementById('bio').value = "";
    } else {

        /* Nome */
        if (data.name == null) {
            document.getElementById('nome').value = "Não informado";
        } else {
            document.getElementById('nome').value = data.name;
        }

        /* Usuário */
        document.getElementById('user').value = "@" + data.login;

        /* Localidade */
        if (data.location == null) {
            document.getElementById('localidade').value = "Não informado";
        } else {
            document.getElementById('localidade').value = data.location;
        }

        /* Reps */
        document.getElementById('reps').value = data.public_repos;

        /* Avatar */
        document.getElementById('avatar').src = data.avatar_url;
        
        /* Email */
        if (data.email == null) {
            document.getElementById('email').value = "Não informado";
        } else {
            document.getElementById('email').value = data.email;
        }

        /* Twitter */
        if (data.twitter_username == null) {
            document.getElementById('twitter').value = "Não informado";
        } else {
            document.getElementById('twitter').value = data.twitter_username;
        }

        /* Seguindo */
        document.getElementById('seguindo').value = data.following + " perfis";

        /* Seguidores */
        document.getElementById('seguidores').value = data.followers + " perfis";

        /* Site */
        if (data.blog == "") {
            document.getElementById('site').value = "Não informado";
        } else {
            document.getElementById('site').value = data.blog;
        }

        /* Empresa */
        if (data.company == null) {
            document.getElementById('empresa').value = "Não informado";
        } else {
            document.getElementById('empresa').value = data.company;
        }

        /* Biografia */
        if (data.bio == null) {
            document.getElementById('bio').value = "Não informado";
        } else {
            document.getElementById('bio').value = data.bio;
        }
    }
}

const F_userGithub = async() => {
    const user = document.getElementById('usergithub').value;
    const url = `https://api.github.com/users/${user}`;
    const promise_data = await fetch(url);
    const data = await promise_data.json();

    enter_data(data)

}

document.getElementById('click')
        .addEventListener('click',F_userGithub);
