// 1ere méthode moins maligne :

const acidesAmines = [
  { acideamine: "UCU", proteine: "Sérine"},
  { acideamine: "UCC", proteine: "Sérine"},
  { acideamine: "UCA", proteine: "Sérine" },
  { acideamine: "UCG", proteine: "Sérine" },
  { acideamine: "AGU", proteine: "Sérine" },
  { acideamine: "AGC", proteine: "Sérine" },
  { acideamine: "CCU", proteine: "Proline" },
  { acideamine: "CCC", proteine: "Proline" },
  { acideamine: "CCA", proteine: "Proline" },
  { acideamine: "CCG", proteine: "Proline" },
  { acideamine: "UUA", proteine: "Leucine" },
  { acideamine: "UUG", proteine:  "Leucine" },
  { acideamine: "UUU", proteine: "Phénylalanine" },
  { acideamine: "UUC", proteine:"Phénylalanine" },
  { acideamine: "CGU", proteine: "Arginine" },
  { acideamine: "CGC", proteine: "Arginine" },
  { acideamine: "CGA", proteine: "Arginine" },
  { acideamine: "CGG", proteine: "Arginine" },
  { acideamine: "AGA", proteine: "Arginine" },
  { acideamine: "AGG", proteine: "Arginine" },
  { acideamine: "UAU", proteine: "Tyrosine" },
  { acideamine: "UAC", proteine: "Tyrosine" },
] 

function transformARN_1(arn) {
  arn = arn.match(/.{1,3}/g);
  arn.forEach(codon => {
    acidesAmines.forEach(array => {
      if (array.acideamine === codon ) {
        index = arn.indexOf(codon);
        arn[index] = array.proteine;
      }
    })
  })
  console.log(arn)
}

let arn1 = "CCGUCGUUGCGCUACAGC";
console.log(arn1 + "correspond à : ")
transformARN_1(arn1);

let arn2 = "CCUCGCCGGUACUUCUCG";
console.log(arn2 + "correspond à : ")
transformARN_1(arn2);


// 2eme méthode plus simple :
const acidesAmines_2 = {
UCU: 'Sérine', UCC: 'Sérine', UCA: 'Sérine', UCG: 'Sérine',
AGU: 'Sérine', AGC: 'Sérine', CCC: 'Proline', CCU: 'Proline',
CCA: 'Proline', CCG: 'Proline', UUA: 'Leucine', UUG: 'Leucine',
UUU: 'Phénylalanine', UUC: 'Phénylalanine', CGU: 'Arginine',
CGC: 'Arginine', CGA: 'Arginine', CGG: 'Arginine',
AGA: 'Arginine', AGG: 'Arginine', UAU: 'Tyrosine',
UAC: 'Tyrosine'
};

function transformARN_2(arn) {
  let arn_finale = [];
  arn = arn.match(/.{1,3}/g);
  arn.forEach(codon => {
    if (acidesAmines_2[codon]) {
      codon = acidesAmines_2[codon];
      arn_finale.push(codon);
    }
  })
  console.log(arn_finale);
}

let arn1_2 = "CCGUCGUUGCGCUACAGC";
console.log(arn1 + "correspond à : ")
transformARN_2(arn1_2);

let arn2_2 = "CCUCGCCGGUACUUCUCG";
console.log(arn2 + "correspond à : ")
transformARN_2(arn2_2);
