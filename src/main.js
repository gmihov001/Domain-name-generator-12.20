/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.searchDomains = function searchDomains() {
  var pronoun = ["the", "our", "your"];
  var adj = ["great", "big", "amazing"];
  var noun = ["jogger", "racoon", "bloop"];
  var extension = [".com", ".net", ".us", ".io"];

  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        for (var l = 0; l < noun.length; l++) {
          document.querySelector("#domain_name").innerHTML +=
            "<li><h3> www." +
            pronoun[i] +
            adj[j] +
            noun[k] +
            extension[l] +
            " </h3></li>";
        }
      }
    }
  }
};

window.onload = function() {};
