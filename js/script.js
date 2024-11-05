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