function validacao() {
    //validacao dos dados
    var titulo = document.forms["formcad"]["titulo"].value;
    var autor = document.forms["formcad"]["autor"].value;
    var editora = document.forms["formcad"]["editora"].value;
    var ano_obra = document.forms["formcad"]["ano_obra"].value;
    var imagem = document.forms["formcad"]["imagem"].value;
    var nome_v = document.forms["formcad"]["nome_v"].value;
    var email = document.forms["formcad"]["email"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var submit = true;

    if (!titulo) {
        document.querySelector('#erro-titulo').innerHTML = "O campo titulo é obrigatório";
        submit = false;
    } else {
        document.querySelector('#erro-titulo').innerHTML = "";
    }

    if (!autor) {
        document.querySelector('#erro-autor').innerHTML = "O campo autor é obrigatório";
        submit = false;
    } else {
        document.querySelector('#erro-autor').innerHTML = "";
    }

    if (!editora) {
        document.querySelector('#erro-editora').innerHTML = "O campo editora é obrigatório";
        submit = false;
    } else {
        document.querySelector('#erro-editora').innerHTML = "";
    }  

    if (!ano_obra) {
        document.querySelector('#erro-ano').innerHTML = "O campo ano da obra é obrigatório";
        submit = false;
    } else {
        document.querySelector('#erro-ano').innerHTML = "";
    }

    if (!imagem) {
        document.querySelector('#erro-imagem').innerHTML = "O campo imagem é obrigatório";
        submit = false;
    } else {
        document.querySelector('#erro-imagem').innerHTML = "";
    }  

    if (!nome_v) {
        document.querySelector('#erro-nome').innerHTML = "O campo nome do vendedor é obrigatório";
        submit = false;
    } else {
        document.querySelector('#erro-nome').innerHTML = "";
    }  

    if (!email) {
        document.querySelector('#erro-email').innerHTML = "O campo email do vendedor é obrigatório";
        submit = false;
    } else {
        document.querySelector('#erro-email').innerHTML = "";
    }   
    
    return submit;
}