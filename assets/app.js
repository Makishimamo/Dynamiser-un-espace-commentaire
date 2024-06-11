let id = (id) => document.getElementById(id);

let prenom = id("first-name"),
    nom = id ("last-name"),
    commentaire = id ("message"),
    form = id ("form"),
    errorMessage = id("error-message");


form.addEventListener('submit', (e) => {
    if (prenom.value = "") 
        if (nom.value = "")
            if (commentaire ="") 
                errorMessage.removeAttribute("style")
    
});