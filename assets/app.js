/*
// Je test que mon fichier js est bien lié à mon html
alert("Hello!")
*/

// Je crée une fonction pour ajouter un commentaire
function comment(prenom, nom, commentaire) {
    // Je crée une div que je stoque dans d1
    let d1 = document.createElement("div");

    // J'ajoute l'attribue class à d1
    d1.setAttribute("class", "flex space-x-4 text-sm text-gray-500");

    // Je recupère le contenue de mes input que je place dans des variables
    var prenom = document.getElementById("first-name");
    var nom = document.querySelector("#last-name");
    var commentaire = document.querySelector("#message");

    // Je vérifie dans la console que mes variables contiennent les bonnes valeurs
    console.log(prenom, nom, commentaire);

    // Je remplace le contenue de d1 par le code HTML suivant :
    d1.innerHTML = 
    `<div class="flex-1 py-10 ">
        <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${commentaire}</p>
        </div>
    </div>`;

    // Je place d1 dans la div contenant l'id : comment-list
    document.querySelector("#comment-list").appendChild(d1);


    /*
    // Je crée une d2 dans d1
    let d2 = createElement("div");
    d2.setAttribute("class", "flex-1 py-10");
    d1.appendChild(d2);
    // Je crée une h3 dans d2
    let newTitle = createElement("h3");
    newTitle.setAttribute("class", "font-medium text-gray-900");
    d2.appendChild(newTitle);
    // Je crée une d3 dans d3
    let d3 = createElement("div");
    d3.setAttribute("class", "prose prose-sm mt-4 max-w-none text-gray-500");
    d2.appendChild(d3);
    // Je crée un paragraphe dans d3
    let newParagraph = createElement("p");
    d3.appendChild(newParagraph);
    // Je récupère le prénom, le nom et je les insère dans newTitle
    let newTitleContent = prenom.value + " " + nom.value;
    newTitle.appendChild(newTitleContent);
    // Je récupère le commentaire et je l'insère dans newParagraph
    let newParagraphContent = commentaire.value;
    newParagraph.appendChild(commentaire.value);
    */
}

// Je lie ma fonction addComment au bouton HTML
document.querySelector("#bouton").addEventListener("click", comment());

/*
// Je test l'appel de ma fonction au clic
function test() {
    alert("ok");
}
*/

/*
// Vérifier les champs du formulaire
try {
    if (!prenom) {
        throw new Error ('Le prénom est requis');
    } else if (!nom) {
        throw new Error ('Le nom est requis');
    } else if (!commentaire) {
        throw new Error ('Le commentaire est requis');
    } else if (commentaire.length > 500) {
        throw new Error ('Le commentaire est trop long (500 maximum)');
    }   
} 
// Gestion des erreurs
catch (err) {
    errorMessage.removeAttribute("style");
    console.log ("Erreur : " +err.message);
}
*/