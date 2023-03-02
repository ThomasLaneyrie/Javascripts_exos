const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Entrepeneurs nés dans les années 70 :")

// Question 1
// Version avec for..in
for(let index in entrepreneurs) {    
  if (entrepreneurs[index].year >= 1970 && entrepreneurs[index].year < 1980){
    console.log(entrepreneurs[index]);                                                                              
  }                                                   
}

// // Version avec forEach 
// entrepreneurs.forEach(entrepreneur => {
//   if (entrepreneur.year >= 1970 && entrepreneur.year < 1980){
//     console.log(entrepreneur);   
//   }
// })

// Question 2
console.log("Prénom et nom des entrepreneurs :");
for(let index in entrepreneurs) { 
  console.log('Prenom : ' + entrepreneurs[index].first + ' - Nom : ' + entrepreneurs[index].last);        
}                                                 

// Question 3
console.log("Age qu'aurait chaque inventeur aujourd'hui :");
for(let index in entrepreneurs) {
  let age = 2023 - entrepreneurs[index].year;
  console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + " aurait aujourd'hui " + age);
}

// Question 4
console.log("Tri des entrepreneurs par ordre alphabétique du nom de famille");
entrepreneurs.sort((a,b) => {
  if (a.last < b.last) {
    return -1;
  } else if (a.last > b.last){
    return 1;
  } else {
    return 0;
  }
})
console.log(entrepreneurs)

