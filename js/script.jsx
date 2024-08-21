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