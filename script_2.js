let number = prompt("Quel nombre souhaites-tu factoriser ?");
number = Number(number);
let factoriel = number;

while (number > 1) {
  factoriel = factoriel * (number - 1);
  number = number - 1;
} 

if (number < 0) {
console.log("Le factoriel de chiffres négtaifs n'existe pas mon gars !");
} else if (number === 0) {
console.log("Par convention le factoriel de 0 est 1"); 
} else {
console.log("Le résultat est " + factoriel);
}