"use strict";
console.log('Introduction aux types de TS');
// Syntaxe pour déclarer une variable :
// « nature nom_variable : type »
// - Variable Global
{
    var test1 = 42;
    // la variable est accessible en dehors du scope de déclaration
}
test1 = 12;
// - Variable Local
{
    let test2 = "Hello";
    const test3 = 3.14;
}
// - Declaration implicite
let test4 = true;
// Les différents type de données :
// ********************************
// - Nombre (entier / réel)
const v1_1 = 13;
const v1_2 = 1534286;
const v1_3 = 3.123456;
const v1_4 = 0x1A;
const v1_5 = 0o777;
const v1_6 = 73;
// - Chaine de caractere
const v2_1 = 'Della';
const v2_2 = 'Bonjour ' + v2_1;
const v2_3 = `Bonjour ${v2_1}`;
const v2_4 = 'test'.concat(' ', 'ts');
// - Booléen
const v3 = false;
// - Tableau
const v4_1 = ['Riri', 'Fifi', 'Loulou'];
const v4_2 = ['Donald', 'Della'];
// - Tout (Typage dynamique de JS)
let v5;
v5 = 'Test';
v5 = 42;
// - Vide => Pour les méthodes qui ne renvoi pas de donnée
function sayHello() {
    console.log('Hello :o');
}
sayHello();
// - Les énumerations
var Stoplight1;
(function (Stoplight1) {
    Stoplight1[Stoplight1["RED"] = 0] = "RED";
    Stoplight1[Stoplight1["ORANGE"] = 1] = "ORANGE";
    Stoplight1[Stoplight1["GREEN"] = 2] = "GREEN";
})(Stoplight1 || (Stoplight1 = {}));
;
var Stoplight2;
(function (Stoplight2) {
    Stoplight2[Stoplight2["RED"] = 10] = "RED";
    Stoplight2[Stoplight2["ORANGE"] = 13] = "ORANGE";
    Stoplight2[Stoplight2["GREEN"] = 14] = "GREEN"; /* 14 */
})(Stoplight2 || (Stoplight2 = {}));
;
let light1;
light1 = Stoplight2.ORANGE;
// - Les prototypes (Objet sans classe)
let person1 = {
    firstname: 'Della',
    lastname: 'Duck',
    birthdate: new Date('1988-01-13')
};
let person2 = {
    firstname: 'Balthazar',
    lastname: 'Picsou',
    birthdate: new Date('1957-09-13')
};
// - Variable nullable
let v6_1 = 'Test';
v6_1 = null;
const s1 = {
    name: 'Demo',
    isVegan: false,
    ingredients: []
};
const c1 = ['Info', 'Math'];
const c2 = ['Info', 'Math', 'Science'];
const c3 = ['Info', 'Math', 'Science', 'Mecanique'];
const u1 = 42;
const u2 = 'Salut';
let a1 = {
    firstname: 'Zaza',
    lastname: 'Vanderquack',
    matricule: 'Test',
    course: 'Philo'
};
const tva = 'BE042';
// Déclaration d'un type en un autre (compatible)
// **********************************************
function getValue() {
    return 42;
}
const r1 = getValue();
