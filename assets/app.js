// Je crée mes variables
let prenom = document.getElementById("first-name"); 
let nom = document.getElementById("last-name");
let commentaire = document.getElementById("message");
let form = document.getElementById("form");
let errorMessage = document.getElementById("error-message");

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