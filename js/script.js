console.log("hello world !");

// event handling
let paragraph = document.getElementById("myParagraph");

  paragraph.addEventListener("mouseover", function() {
    paragraph.style.color = "blue";
  });

  paragraph.addEventListener("mouseout", function() {
    paragraph.style.color   
 = "black";
});

let image = document.getElementById("myImage");

  image.addEventListener("click", function() {
    if (image.src.includes("image1.jpg")) {
      image.src = "image2.jpg";
    } else {
      image.src = "image1.jpg";
    }
});

let form = document.getElementById("myForm");
  let nameInput = document.getElementById("name");

  form.addEventListener("submit", function(event) {
    if (nameInput.value === "") {
      alert("Please enter your name.");
      event.preventDefault(); // Mencegah form di-submit
    }
});

// respon event handling
const menu = document.getElementById('menu');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Validate form data here
  // Send data to server using fetch or XMLHttpRequest
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;
// Add event listeners for navigation buttons
function showImage(n) {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + n + images.length) % images.length;
  images[currentIndex].classList.add('active');
}