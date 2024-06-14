/* // Je test que mon fichier js est bien lié à mon html
alert("Hello!")
*/

// Je crée mes variables
const prenom = document.getElementById("first-name");
const nom = document.getElementById("last-name");
const message = document.getElementById("message");
let errorMessage = document.getElementById("error-message");
let commentList = document.getElementById("comment-list");

// Je récupère dans une variable la valeur de chaque champs et je vérifie dans la console
prenom.addEventListener('input', function(e) {
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
    let prenomText = e.target.value;
    console.log(prenomText);
})

nom.addEventListener('input', function(e){
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
    let nomText = e.target.value;
    console.log(nomText);
})

message.addEventListener('input', function(e){
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
    let messageText = e.target.value;
    console.log(messageText);
})

// Je crée une fonction pour ajouter un commentaire
function addComment() {
    // Je crée le nouveau commentaire
    const comment = `
        <div class="flex space-x-4 text-sm text-gray-500"
            <div class="flex-1 py-10 ">
                <h3 class="font-medium text-gray-900">${prenomText} ${nomText}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${messageText}</p>
                </div>
            </div>
        </div>    
    `

    // J'ajoute le nouveau commentaire à la suite des autres
    commentList.insertAdjacentHTML('beforeend', comment)
  
}

// Je lie ma fonction addComment au bouton HTML
document.getElementById("bouton").addEventListener("click", addComment);

/* // Je test l'appel de ma fonction au clic
function test() {
    alert("ok");
}
*/