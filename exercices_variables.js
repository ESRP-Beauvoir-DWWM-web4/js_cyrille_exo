// Bon courage pour ces exercices





// ========================== VARIABLES ===========================

// -------------------------- Exercice 1 --------------------------

/*
Dans cet exercice, vous allez créer les variables suivantes : 

"num" qui contiendra le nombre 42
"txt" qui contiandra le mot : Bonjour, je suis une variable
"bin" qui contiendra une valeur booléenne
"vir" qui contiendra un nombre en "float"

Affichez le résultat dans la console de votre navigateur
*/
let num = [42]
let txt = "Bonjour, je suis une variable";
let bin = true;
let vir = 34.5;
console.log(num, txt, bin, vir)
// -------------------------- Exercice 2 --------------------------

/*
Ajouter à la variable "num" une valeur de 15
Créer une variable qui concaténera une chaine de caractère à la variable "num"
Créer une variable "number" qui contiendra le nombre 12,54878965587854121 et faire en sorte d'afficher le résultat avec seulement 2 décimales

Affichez le résultat dans la console de votre navigateur
*/
num.push(15)
console.log("la valeur est "+num);
let number =12.54878965587854121.toFixed(2);
console.log(number);
// -------------------------- Exercice 3 --------------------------

/*
la variable "texte" contient une chaine de caractère que nous voulons convertir en nombre entier

Afficher le résultat dans une nouvelle variable

Affichez le résultat dans la console de votre navigateur
*/

let texte = "456";
parseInt(texte);
console.log(texte)

// -------------------------- Exercice 4 --------------------------

/*
La variable "numb" qui contient un prix
Le magasin apporte une promotion de 25 % et nous voulons récupérer dans une variable "res" le montant de la réduction

Affichez le résultat dans la console de votre navigateur
*/
let numb = 100;
let res = (numb*25)/100;
console.log(res);

// -------------------------- Exercice 5 --------------------------

/*
Une variable contenant une chaine de caractères à besoin d'être inversée pour connaitre le dicton du jour.

Trouver la ou les méthodes qui pourront révéler le résultat

Affichez le résultat dans la console de votre navigateur
*/

let dicton =" suov ceva tios ecrof al euQ";
let dictonendrois=dicton.split('').reverse().join('');
console.log(dictonendrois);
// -------------------------- Exercice 6 --------------------------

/*
Vous devez le mot de passe pour terminer votre mission, voici 2 mots que vous devrez couper pour garder que les 4 premieres lettres

Bien sur vous devrez afficher le résultat dans une variable appelée "say_the_magic_word"

Affichez le résultat dans la console de votre navigateur
*/

let phrase1 = "caravane";
let phrase2 = "ibessage";
let phrase3=phrase1.slice(0, 4);
let phrase4=phrase2.slice(0, 4);
let say_the_magic_word=phrase3+phrase4;
console.log(say_the_magic_word);

// -------------------------- Exercice 7 --------------------------

/*
Nous avons dans la variable un nombre à virgule, veuillez l'arrondir en un entier grâce à une méthode

Affichez le résultat dans la console de votre navigateur
*/

let nb = 14.998988888898888899
let arrondi = Math.ceil(nb);
console.log(arrondi);

// -------------------------- Exercice 8 --------------------------

/*
Dans la variable "texte1" nous avons une erreur, remplacer grâce à une méthode le nom de Jean-Eudes par Pierre-Daniel
*/

let texte1 = "Le chien de Jean-Eudes est extremement gentil et affectueux";
let texte2 = texte1.replace("Jean-Eudes", "Pierre-Daniel");
console.log(texte2)
// -------------------------- Exercice 9 --------------------------

/*
Afficher dans la console grâce à une méthode le nombre de caractères contenu dans la variable "txt1"
*/

let txt1 = "Bonjour et bienvenue sur les exercices"
console.log(`${txt1.length}`)

// -------------------------- Exercice 10 -------------------------

/*
Afficher dans la console le type de la variable "a"
*/

let a = 15;
console.log(typeof a)


// ========================== CONDITIONS ===========================

// -------------------------- Exercice 11 -------------------------

/*
Nous voulons tester 3 notes sur 20 dans une condition

Les notes à tester : 
8, 17, 22

Si la note est inferieur à 0, on affichera ce message : 
Pas génial du tout

Si la note est superieure ou égale à 10 on affichera ce message :
Bravo ! Continue comme ça

sinon on affiche
Note incompatible

Stocker les notes dans une variable "note"

Affichez le résultat dans la console de votre navigateur
*/

let note = [8, 17, 22,];

    if(note<10){
        console.log("Pas genial du tout");
    }else if(note>=10){
        console.log("Bravo ! Continue comme ça");
    }else{
        console.log("Note Incompatible");
    }




// ========================== LES POP-UP ===========================

// -------------------------- Exercice 12 -------------------------

/*
Mettez en place 3 variables contenant des nombres entiers, dans ces variables mettez en place une pop-up demandant d'entrer un nombre et faites en sorte d'afficher le resultat de l'addition de ces 3 variables dans une autre fentre pop-up : Le resultat de l'addition est : ...
*/
let number1 = prompt("entrer un chiffre")
let number2 = prompt("entrer un chiffre")
let number3 = prompt("entrer un chiffre")
let result = number1 + number2 +number3
let popup = alert(result)


// -------------------------- Exercice 13 -------------------------

/*
Mettez en place une fonction qui fera en sorte d'afficher une pop-up demandant votre nom en cliquant sur un boutton sur le fichier index.html.

Une fois le nom entrer afficher une autre op-up disant "Bonjour ..."
*/
function name(){;
    let firstname = prompt("Quel est votre nom ?")
    let hello = alert("bonjour "+firstname)

}

name()

// ========================== JAVASCRIPT & HTML ===========================

// -------------------------- Exercice 14 -------------------------

/*
Mettez en place une balise <h1> qui accueillera une horloge que vous aller mettre en place en javascript grâce a deux fonctions
*/



/*
ENTRAINEMENT GITHUB

Vous ferez un repo sur Github sous le nom de "js_votre prenom_exo"

*/







