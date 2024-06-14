/* // Je test que mon fichier js est bien lié à mon html
alert("Hello!")
*/

// Je crée mes variables
const prenom = document.querySelector("#first-name");
const nom = document.querySelector("#last-name");
const message = document.querySelector("#message");
const errorMessage = document.querySelector("#error-message");
const commentList = document.querySelector("#comment-list");
const bouton = document.querySelector("#bouton");

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
    //Je crée mes éléments
    let d1 = document.createElement("div");
    let d2 = document.createElement("div");
    let d3 = document.createElement("div");
    let title = document.createElement("h3");
    let para = document.createElement("p");
    
    // J'ajoute une class aux éléments
    d1.setAttribute("class", "flex space-x-4 text-sm text-gray-500");
    d2.setAttribute("class", "flex-1 py-10");
    d3.setAttribute("class", "prose prose-sm mt-4 max-w-none text-gray-500");
    title.setAttribute("class", "font-medium text-gray-900");

    // Je définis le valeur des différents éléments
    
    // Je place mes éléments aux bons endroits
    commentList.appendChild(d1);
    d1.appendChild(d2);
    d2.appendChild(title);
    d2.appendChild(d3);
    d3.appendChild(para);

    // // Je crée le nouveau commentaire
    // const comment = `
    //     <div class="flex space-x-4 text-sm text-gray-500"
    //         <div class="flex-1 py-10 ">
    //             <h3 class="font-medium text-gray-900">${prenomText} ${nomText}</h3>
    //             <div class="prose prose-sm mt-4 max-w-none text-gray-500">
    //                 <p>${messageText}</p>
    //             </div>
    //         </div>
    //     </div>    
    // `

    // // J'ajoute le nouveau commentaire à la suite des autres
    // commentList.insertAdjacentHTML('beforeend', comment)
  
}

// Je lie ma fonction addComment au bouton HTML
bouton.addEventListener("click", addComment);

/* // Je test l'appel de ma fonction au clic
function test() {
    alert("ok");
}
*/