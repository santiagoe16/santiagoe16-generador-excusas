/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

let whoRandom = Math.floor(Math.random() * 4);
let actionRandom = Math.floor(Math.random() * 4);
let whatRandom = Math.floor(Math.random() * 3);
let whenRandom = Math.floor(Math.random() * 5);

document.body.onload = function() {
  document.getElementById("excuse").innerHTML =
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom];
};
