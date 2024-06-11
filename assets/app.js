let id = (id) => document.getElementById(id);

let prenom = id("first-name"),
    nom = id ("last-name"),
    commentaire = id ("message"),
    form = id ("form");


form.addEventListener('submit', (e) => {
    if (prenom.value == "") {
    } else if ( nom.value == "") {
    } else if (commentaire =="") {
        let errorMessage = document.getElementById("error-message");
        errorMessage.removeAttribute("style")
    }

});