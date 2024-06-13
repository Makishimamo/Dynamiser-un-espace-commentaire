// Je crée mes variables
let prenom = document.getElementById("first-name"); 
let nom = document.getElementById("last-name");
let commentaire = document.getElementById("message");
let form = document.getElementById("form");
let errorMessage = document.getElementById("error-message");
let commentList = document.getElementsById("comment-list");
let bouton = document.getElementById("bouton");

// Je crée une fonction : ajout du commentaire
function addComment() {
    // Je crée une d1 dans commentList
    let d1 = createElement("div");
    d1.setAttribute("class", "flex space-x-4 text-sm text-gray-500");
    commentList.appendChild(d1);
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
}
// Je lie ma fonction addComment au bouton HTML
bouton.addEventListener("submit", addComment);

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