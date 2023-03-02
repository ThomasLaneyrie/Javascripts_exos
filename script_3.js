console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
let number = prompt("Nombres d'étages de ta pyramide ?");
number = Number(number);

let etagePyramide = "#";

for(let count = 1; count <=number; count++){
  console.log(etagePyramide);
  etagePyramide += "#";
} 