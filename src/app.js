import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']; 

  const sujeto = who[Math.floor(Math.random() * who.length)];
  const verbo = action[Math.floor(Math.random() * action.length)];
  const objeto = what[Math.floor(Math.random() * what.length)];
  const cuando = when[Math.floor(Math.random() * when.length)];

  const excuse = `${sujeto} ${verbo} ${objeto} ${cuando}.`;

  document.getElementById("excuse").innerHTML = excuse;

  console.log("Excuse generated:", excuse);
};
