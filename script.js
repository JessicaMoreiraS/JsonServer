usuarios()

function usuarios(){
    document.getElementById("usuarios").style.display = "flex";
    document.getElementById("filmes").style.display = "none";
    document.getElementById("carros").style.display = "none";
    document.getElementById("usuarios").innerHTML ="";

    fetch('https://raw.githubusercontent.com/JessicaMoreiraS/JsonServer/main/db.json')
    .then(response =>{
        return response.json()
    }).then(usuarios => {
        console.log(usuarios);
        for(a=0; a<usuarios.usuarios.length; a++){
            document.getElementById("usuarios").innerHTML += "<div><p>ID: "+usuarios.usuarios[a].id +"</p><p>Nome: "+ usuarios.usuarios[a].nome +"</p><p>Email: "+ usuarios.usuarios[a].email +"</p><p>Senha:"+ usuarios.usuarios[a].senha+"</p></div>";
        }
    })

    document.getElementById("icone").innerHTML = '<img src="imagens/usuarios.png"/>'
}

function filmes(){
    document.getElementById("usuarios").style.display = "none";
    document.getElementById("filmes").style.display = "flex";
    document.getElementById("carros").style.display = "none";
    document.getElementById("filmes").innerHTML = "";

    fetch('https://raw.githubusercontent.com/JessicaMoreiraS/JsonServer/main/db.json')
    .then(response =>{
        return response.json()
    }).then(filmes => {
        console.log(filmes);
        for(a=0; a<filmes.filmes.length; a++){
            document.getElementById("filmes").innerHTML += "<div><p>Titulo: "+ filmes.filmes[a].titulo+"</p><p>Descrição: "+ filmes.filmes[a].descricao +"</p><p>Avaliação: "+ filmes.filmes[a].avaliacao +"</p></div>"
        }
    })

    document.getElementById("icone").innerHTML = '<img src="imagens/pipoca.png"/>'
}

function carros(){
    document.getElementById("usuarios").style.display = "none";
    document.getElementById("filmes").style.display = "none";
    document.getElementById("carros").style.display = "flex";
    document.getElementById("carros").innerHTML ="";

    fetch('https://raw.githubusercontent.com/JessicaMoreiraS/JsonServer/main/db.json')
    .then(response =>{
        return response.json()
    }).then(carros => {
        console.log(carros);
        for(a=0; a<carros.carros.length; a++){
            document.getElementById("carros").innerHTML += "<div><p>Marca: "+ carros.carros[a].nome +"</p><p>Modelo: "+ carros.carros[a].modelo +"</p><p>Ano: "+ carros.carros[a].ano +"</p></div>"
        }
    })

    document.getElementById("icone").innerHTML = '<img src="imagens/carro.png"/>'
}


