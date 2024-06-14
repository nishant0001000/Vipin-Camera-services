document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the response for debugging
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error); // Log the error for debugging
        alert('There was an error sending the message: ' + error);
    });
});