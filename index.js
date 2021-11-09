// const isValid = false;
// const age = 20;
// const firstName = 'Edvardas';
// const lastName = 'Salnis';

// && And operatorius.
// Uzkomentuoti su CNTRL + K + C. + CNTRL + K + U
// if (firstName === 'Edvardas' && lastName === 'Salnis' && age === 1) {
//     console.log('True')
// }
// else{
//     console.log('False')
// }
// // || Or operatorius
// if (firstName === 'Edvardas' || lastName === 'Salnis' && age === 0) {
//     console.log('True')
// }
// else{
//     console.log('False')
// }
// galima nerasyti true,false arba Galime vietoj true arba false irasyti Galima,Negalima ar pnsir gauti sitas reiksmias.
// const allowToBuy = age >= 20 ? true : false; 
// console.log(allowToBuy)
// function greet (personName) {
//     const name = personName ? personName : 'Stranger';
//     console.log(`Howdy, ${name}`);

// }
// greet();


// const age = '';
// if(age >= 20){
//     console.log("Galite nusipirkti gerima");   
// }
// else if(age < 20){
//     console.log("Negalite nusipirkti gerimo");
// }
// else if(typeof age === 'string'){
//     console.log("Netinkamas formatas");
// }
// else {
//     console.log("Bandykite dar karta")}

const person = {
    name:'Edvardas',
    age: 18,
    isLithuanian: true
}
 let citizen; // Be reiksnmes

// if(person.age >= 18 && person.isLithuanian){
//     citizen="Gali balsuoti";
    
// }
// if(citizen) {
//     console.log(citizen) // Patikrins ar nera neigiama salyga ir nieko neatspausdins nes neturi reiksmems.
// }
// Neismes nieko

// citizen = person.age >= && person.isLithuania ? Galima balsuo: Negalima;
// const age = 88;
// if(age < 20) {
//     console.log('Negalite nusipirkti gerimo')
// } else if (age > 20) {
//     console.log('Galite nusipirkti gerima')
// } else if (typeof age === 'string'){
//     console.log('Netinkamas formatas')
// } else if (age > 80){
//     console.log('Daugiau 80')
// }
// else {
//     console.log('Bandykite dar karta')
// }

const allow = (person.age >= 18 && person.isLithuanian) ? citizen = 'gali balsuoti': '';