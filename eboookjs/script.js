var login = [
    { email: "hoho@gmail.com", mdp: "azerty1" },
    { email: "moho@gmail.com", mdp: "azerty2" },
    { email: "boho@gmail.com", mdp: "azerty3" },
    { email: "joho@gmail.com", mdp: "azerty4" },
];
function log(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var mdp = document.getElementById("mdp").value;

    for (let index = 0; index < login.length; index++) {

        if (login[index].email == email && login[index].mdp == mdp) {
            document.getElementById("btn").innerHTML = email
        }

    }

}
var liste = [

    { tittle: "le solei du ciel", image: "book1.jpeg", description: "mr robert", prix: 120, type: "Money", etoil: 3, },
    { tittle: "le exo, du miel", image: "book2.png", description: "kochiha chikor", prix: 80, type: "Money", etoil: 3, },
    { tittle: "ritch dad poor dad", image: "book3.jpeg", description: "robert kiosaki", prix: 120, etoil: 3, },
    { tittle: "how to make money", image: "book5.jpeg", description: "Mr houssam ", prix: 400, etoil: 2, },

    { tittle: "hazhzh", image: "book4.jpeg", description: "dj snake", prix: 1300, etoil: 6, },
    { tittle: "how to make money", image: "book5.jpeg", description: "Mr houssam ", prix: 1200, etoil: 8, },
    { tittle: "how to make money", image: "book7.jpeg", description: "Mr houssam ", prix: 4000, etoil: 9, },
    { tittle: "ritch dad poor dad", image: "book8.jpeg", description: "robert kiosaki", prix: 1200, etoil: 7, },


]
for (let index = 0; index < liste.length; index++) {
    document.getElementById("tout").innerHTML +=
        `
<div class="carte">
    <img class="modele" src= ${liste[index].image}>
    <h1 class="tittle"> ${liste[index].tittle}</h1>
    <div class="details">
        <h1>${liste[index].prix}..$</h1>
        <h2>${liste[index].description}
        <p>${liste[index].etoil}
    </div>
<div>
`

    if (liste[index].prix <= 800) {
        document.getElementById("bookmoney").innerHTML +=
            `
        <div class="carte">
            <img class="modele" src= ${liste[index].image}>
            <h1 class="tittle"> ${liste[index].tittle}</h1>
            <div class="details">
                <h1>${liste[index].prix}..$</h1>
                <h2>${liste[index].description}
                <p>${liste[index].etoil}
            </div>
        <div>
        `
    }
    if (liste[index].etoil > 5) {
        document.getElementById("bookloi").innerHTML +=
            `
    <div class="carte">
        <img class="modele" src= ${liste[index].image}>
        <h1 class="tittle"> ${liste[index].tittle}</h1>
        <div class="details">
            <h1>${liste[index].prix}..$</h1>
            <h2>${liste[index].description}
            <p>${liste[index].etoil}
        </div>
    <div>
    `
    }
    function AjouterProduit(event) {
        // Evite d'avoir une actualisation de la page lors du click sur le button
        event.preventDefault();

        // On récupére les valeurs des inputs
        var nom = document.getElementById("tittle").value;
        var prix = document.getElementById("prix").value;
        var description = document.getElementById("description").value;
        var rate = document.getElementById("etoil").value;



        // La div où on veut afficher nos produits
        var contenuHTML = document.getElementById("tout");

        // On change l'HTML intérieur de la section par la carte du produit
        contenuHTML.innerHTML += `
          <div class="carte">
            <img src="images/image.webp" />
            <h1>${nom}</h1>
            <p>${prix}</p>
            <p>${description}</p>
            <h6>${rate} $</h6>
          </div>
        `;
    }


    // }
    // for (let index = 0; index < liste.length; index++) {
    //     document.getElementById("product").innerHTML +=
    //         `
    //     <div class="carte">
    //         <img class="modele" src= ${liste[index].image}>
    //         <h1 class="tittle"> ${liste[index].tittle}</h1>
    //         <div class="details">
    //             <h1>${liste[index].prix}
    //             <p>${liste[index].description}
    //         </div>
    //     <div>
    //     `

    // }

}