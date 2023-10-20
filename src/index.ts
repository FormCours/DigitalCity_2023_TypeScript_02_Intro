console.log('Introduction aux types de TS');

// Syntaxe pour déclarer une variable :
// « nature nom_variable : type »

// - Variable Global
{
    var test1 : number = 42;
    // la variable est accessible en dehors du scope de déclaration
}
test1 = 12;

// - Variable Local
{
    let test2 : string = "Hello";
    const test3 : number = 3.14;
}

// - Declaration implicite
let test4 = true;


// Les différents type de données :
// ********************************

// - Nombre (entier / réel)
const v1_1 : number = 13;
const v1_2 = 1_534_286;
const v1_3 = 3.123456;
const v1_4 = 0x1A;
const v1_5 = 0o777;
const v1_6 = 0b0100_1001;

// - Chaine de caractere
const v2_1 : string = 'Della';
const v2_2 : string = 'Bonjour ' + v2_1;
const v2_3 : string = `Bonjour ${v2_1}`; 
const v2_4 : string = 'test'.concat(' ', 'ts');

// - Booléen
const v3 : boolean = false;

// - Tableau
const v4_1 : string[] = ['Riri', 'Fifi', 'Loulou'];
const v4_2 : Array<string> = ['Donald', 'Della'];

// - Tout (Typage dynamique de JS)
let v5 : any; 
v5 = 'Test';
v5 = 42;

// - Vide => Pour les méthodes qui ne renvoi pas de donnée
function sayHello() : void {
    console.log('Hello :o');
}
sayHello();

// - Les énumerations
enum Stoplight1 {
    RED, ORANGE, GREEN
};
enum Stoplight2 {
    RED = 10, ORANGE = 13, GREEN /* 14 */
};

let light1 : Stoplight2;
light1 = Stoplight2.ORANGE;


// - Les prototypes (Objet sans classe)
let person1 : { 
    firstname: string, 
    lastname: string, 
    birthdate : Date
} = {
    firstname : 'Della',
    lastname : 'Duck',
    birthdate : new Date('1988-01-13')
};

let person2 : { 
    firstname: string, 
    lastname: string, 
    birthdate : Date
} = {
    firstname : 'Balthazar',
    lastname : 'Picsou',
    birthdate : new Date('1957-09-13')
};

// - Variable nullable
let v6_1 : string|null = 'Test';
v6_1 = null;


// - Type customiser
type Sandwich = {
    name : string,
    desc? : string,
    isVegan: boolean,
    ingredients : string[]
}

const s1 : Sandwich = {
    name: 'Demo',
    isVegan: false,
    ingredients: []
}

// - Tableau avec un nombre d'element defini (obligatoire / optionnel)
type Courses = [string, string, ...string[]];

const c1 : Courses = ['Info', 'Math'];
const c2 : Courses = ['Info', 'Math', 'Science'];
const c3 : Courses = ['Info', 'Math', 'Science', 'Mecanique'];



// Les types composé :
// *******************

// - Unions
type StringOrNumber = string | number;

const u1 : StringOrNumber = 42;
const u2 : StringOrNumber = 'Salut';

// - Intersections
type Student = {
    firstname: string,
    lastname: string,
    yearResult? : number,
    matricule: string
}

type Prof = {
    firstname: string,
    lastname: string,
    course: string,
    email?: string
}

type Assistant = Student & Prof;

let a1 : Assistant = {
    firstname: 'Zaza',
    lastname : 'Vanderquack',
    matricule : 'Test',
    course: 'Philo'
};

// - Type basé sur un template string (/!\ pas de check runtime !!!)
type CountryCode = 'BE' | 'FR';
type TvaCode = `${CountryCode}${number}`;

const tva : TvaCode = 'BE042'


// Déclaration d'un type en un autre (compatible)
// **********************************************
function getValue() : unknown {
    return 42;
}

const r1 : number = getValue() as number ;


// Utilitaire de typescript pour les types :
// *****************************************

// Créer un type de donnée sur base d'un autre
type Product = {
    id: number,
    name: string,
    desc? : string,
    price: number
}

// - Omettre une ou plusieurs props
type ProductData = Omit<Product, 'id'>
type ProductDataWithoutPrice = Omit<Product, 'id'|'price'>

// - Selectionner une ou plusieurs props
type ProductInfo = Pick<Product, 'name'|'desc'>

// - Copie du type avec toutes les props nullables 
type ProductNullable = Partial<Product>;

// - Créer un Record (Clef / Valeur)
type ProductRecord = Record<number, Product>;