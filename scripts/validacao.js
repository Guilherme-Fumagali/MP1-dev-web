function validacao() {
    //validacao dos dados
    var titulo = document.forms["form"]["titulo"].value;
    if (!titulo) {
        document.querySelector('.error-message').innerHTML = "O campo titulo é obrigatório";
        return false;
    }
    
    document.querySelector('.error-message').innerHTML = "";
    return true;

}