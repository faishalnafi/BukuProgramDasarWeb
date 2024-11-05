document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        // Di sini, Anda bisa menambahkan logika untuk mengirim data ke server jika diperlukan
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// DOM JAVASCRIPT
// Mengambil elemen dengan id "demo"
const paragraph = document.getElementById("demo");

// Mengubah isi elemen
paragraph.textContent = "Teks ini telah diubah dengan JavaScript!";

// Mengubah warna latar belakang elemen
paragraph.style.backgroundColor = "lightblue";

// Mengambil elemen dengan id "saya" dan mengubah teks h1
const judulSaya = document.getElementById("saya");
judulSaya.querySelector("h1").textContent = "Tentang Saya (Diubah)";

// DOM ITEMS

// Membuat elemen baru (paragraf)
const newParagraph = document.createElement("p");
newParagraph.textContent = "Ini adalah paragraf baru yang ditambahkan secara dinamis.";

// Menambahkan paragraf baru ke dalam div dengan id "saya"
const divSaya = document.getElementById("saya");
divSaya.appendChild(newParagraph);