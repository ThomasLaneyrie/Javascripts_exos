const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Question 1
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
let rentedOnce = 1;
books.forEach(book => {
  if (book.rented === 0) {
    rentedOnce = 0;
  }
});

if (rentedOnce === 0) {
  console.log("Non, au moins un livre n'a jamais été emprunté");
} else {
  console.log("Oui, tous les livres ont été au moins empruntés une fois");
}


// // Question 2 (En faisant des forEach + if)
// console.log("Quel est livre le plus emprunté ?")
// let mostRented = 0;
// let mostRentedBook = 0;

// books.forEach(book => {
//   if (book.rented >= mostRented) {
//     mostRented = book.rented;
//     mostRentedBook = book;
//   }
// })
// console.log("Le livre le plus emprunté est" + mostRentedBook.title);

// Question 2 et 3 en même temps en triant par ordre des livres du moins au plus emprunté d'abord
books.sort((a,b) => {
  if (a.rented < b.rented) {
    return -1;
  } else if (a.rented > b.rented){
    return 1;
  } else {
    return 0;
  }
})
console.log("Quel est livre le plus emprunté ?");               // Question 2
console.log(books[books.length-1]);
console.log("Quel est le livre le moins emprunté ?");           // Question 3
console.log(books[0]);

// Question 4
let id = 873495;
console.log("Quel est livre avec l'id " + id);
books.forEach(book => {
  if (book.id === id) {
    console.log("Le livre avec l'id " + id +" est le livre :" + book.title);
  }
})


// Question 5
let id2 = 133712;
let index = 0;

console.log("Peux-tu supprimer le livre avec l'id " + id + " et me renvoyer la liste modifiée?");
books.forEach(book => {
  if (book.id === id2) {
   index = books.indexOf(book);
  }
})
delete books[index];
console.log(books);

// Question 6 (Déjà fait en question 2 et 3)
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");
books.sort((a,b) => {
  if (a.rented < b.rented) {
    return -1;
  } else if (a.rented > b.rented){
    return 1;
  } else {
    return 0;
  }
})
console.log(books);