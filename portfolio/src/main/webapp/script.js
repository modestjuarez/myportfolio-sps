// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//Following code was retrieved from w3schools.com
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = 1
      }
  if (n < 1) {
      slideIndex = slides.length
      }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Fetch the comment from servers and add it to DOM
function getDataFromJson() {
    fetch('/data')
    .then(response => response.json())
    .then((comments) => {
        /*// comments is an object, not a string, so we have to
        // reference its fields to create HTML content
        //For Step 3
        const commentsListElement = document.getElementById('data-container');
        commentsListElement.innerHTML = ' ';
        commentsListElement.appendChild(
            createListElement('Name: ' + comments.name));
        commentsListElement.appendChild(
            createListElement('City: ' + comments.city));
        commentsListElement.appendChild(
            createListElement('State: ' + comments.state));*/

        //Step 4
        const commentsListElement = document.getElementById('data-container');
        commentsListElement.innerHTML = ' ';
        commentsListElement.appendChild(
            createListElement('Comments: ' + comments.Comment));
    });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}