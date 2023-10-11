/*****************************
* CODING CHALLENGE 1
*/

/*

Mark et John veulent comparer leur BMI (Indice de masse corporelle),
qui est calculé en utilisant la formule :
BMI = poids / taille^2 = poids / (taille * taille).
N.B. Le poids est en kg et la taille est en mètres.

1. Stockez le poids et la taille de  Mark et de John dans des variables
2. Calculez le BMI de chacun
3. Créez une variable booléenne qui contient l'information de savoir
   si Mark a un BMI plus élevé que John.
4. Imprimez une chaîne de caractères dans la console contenant la
variable de l'étape 3. (Quelque chose du genre "Est-ce que le BMI de
Mark est plus élevé que celui de John ? true"). 

BONNE CHANCE 😀
*/

let poidsMark, poidsJohn, tailleMark, tailleJohn, bmiMark, bmiJohn, isGreater;

poidsMark = prompt('Quel est votre poids mark? (En KG)');
poidsJohn = prompt('Quel est votre poids John? (En KG)');

tailleMark = prompt('Quel est votre taille Mark? (En Mètres)');
tailleJohn = prompt('Quel est votre taille John? (En Mètres)');

bmiMark = poidsMark / tailleMark**2;
bmiJohn = poidsJohn / tailleJohn**2;

isGreater = (bmiMark > bmiJohn);

console.log(`Est-ce que le BMI de Mark est plus élevé que celui de John ? ${isGreater}`);

if(isGreater) {
    console.log(`Le bmi de mark (${bmiMark}) est supérieur à celui de John (${bmiJohn}) ?`);
} else if (bmiMark === bmiJohn){
    console.log(`Le bmi de mark (${bmiMark}) est inférieur à celui de John (${bmiJohn}) ?`);
} else {
    console.log(`Le bmi de mark (${bmiMark}) est inférieur à celui de John (${bmiJohn}) ?`);
}

