/* // Je test que mon fichier js est bien lié à mon html
alert("Hello!")
*/

// Je crée mes variables
const prenom = document.getElementById("first-name");
const nom = document.getElementById("last-name");
const text = document.getElementById("message");
let errorMessage = document.getElementById("error-message");
let commentList = document.getElementById("comment-list");

// Je vérifie si les champs sont remplit
prenom.addEventListener('input', function(e) {
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
})

nom.addEventListener('input', function(e){
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
})

text.addEventListener('input', function(e){
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
})

// Je crée une fonction pour ajouter un commentaire
function addComment() {
    // Je crée le nouveau commentaire
    const comment = `
        <div class="flex space-x-4 text-sm text-gray-500"
            <div class="flex-1 py-10 ">
                <h3 class="font-medium text-gray-900">${prenom.e.target.value} ${nom.e.target.value}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${text.e.target.value}</p>
                </div>
            </div>
        </div>    
    `

    // J'ajoute le nouveau commentaire à la suite des autres
    commentList.insertAdjacentHTML('beforeend', comment)
  
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
document.getElementById("bouton").addEventListener("click", addComment);

/* // Je test l'appel de ma fonction au clic
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
    
    console.log ("Erreur : " +err.message);
}
*/