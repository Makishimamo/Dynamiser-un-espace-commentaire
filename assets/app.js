/* // Je test que mon fichier app.js est bien lié à mon index.html
alert("Hello!")
*/

// Je crée mes variables
const prenom = document.querySelector("#first-name");
const nom = document.querySelector("#last-name");
const message = document.querySelector("#message");
const errorMessage = document.querySelector("#error-message");
const commentList = document.querySelector("#comment-list");
const bouton = document.querySelector("#bouton");

/* // Je test que mes variables sont bien créer
console.log(prenom);
console.log(nom);
console.log(message);
console.log(errorMessage);
console.log(commentList);
console.log(bouton);
*/

// Je récupère dans une variable la valeur de chaque champs 
// Je vérifie que la variable contient bien la valeur du champ dans la console
prenom.addEventListener('input', function(e) {
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
    let prenomText = e.target.value;
    console.log(prenomText);
});

nom.addEventListener('input', function(e){
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
    let nomText = e.target.value;
    console.log(nomText);
});

message.addEventListener('input', function(e){
    if(e.target.value === "") {
        errorMessage.removeAttribute("style");
    }
    let messageText = e.target.value;
    console.log(messageText);
});

// Je crée une fonction pour ajouter un commentaire
const addComment = () => {
    /*// Je vérifie que ma fonction est bien appeler au click du bouton
    alert("ok")
    */

    //Je crée mes nouveaux éléments
    let d1 = document.createElement("div");
    let d2 = document.createElement("div");
    let d3 = document.createElement("div");
    let title = document.createElement("h3");
    let para = document.createElement("p");

    console.log(d1, d2, d3, title, para);
    
    // // J'ajoute une class aux éléments
    // d1.classList.add("flex space-x-4 text-sm text-gray-500");
    // d2.classList.add("flex-1 py-10");
    // d3.classList.add("prose prose-sm mt-4 max-w-none text-gray-500");
    // title.classList.add("font-medium text-gray-900");

    // // Je définis la valeur des différents éléments
    // title.insertAdjacentElement = ("afterbegin", prenomText + " " + nomText);
    // para.insertAdjacentElement = ("afterbegin", messageText);
    
    // // Je place mes éléments aux bons endroits
    // commentList.appendChild(d1);
    // d1.append(d2);
    // d2.append(title);
    // d2.append(d3);
    // d3.append(para);
}

bouton.addEventListener("click", addComment);

    // // Autre méthode : Je crée le nouveau commentaire
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
  

// Je lie ma fonction addComment au bouton HTML


