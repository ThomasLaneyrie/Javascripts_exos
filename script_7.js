reply = prompt("Tu racontes quoi de beau ?");

// Question 1
isQuestion = reply.split("").pop();

// Question 2
let replyUppercase = reply;
if (replyUppercase === reply.toUpperCase()) {
  replyUppercase = "Up";
}

// Question 3
let containFortnite = reply.indexOf("Fortnite");

// Question 4
let replyLength = reply.length;

// Renvoi de la console en fonction des résultats aux questions :
if (isQuestion === "?"){
  console.log("Ouais Ouais..");
} else if (replyUppercase === "Up" && replyLength !== 0) {
  console.log("Pwa, calme-toi...");
} else if (containFortnite !== -1) {
  console.log("on s' fait une partie soum-soum ?");
} else if (replyLength === 0) {
  console.log("T'es en PLS ?");
} else if (reply !== "") {
  console.log("balek");
}
