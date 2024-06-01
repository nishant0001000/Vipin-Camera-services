document.getElementById('submitButton').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Construct the email body
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;

    // Send the email
    window.location.href = 'mailto:rajputvashu429@gmail.com?subject=Enquiry Or Contact&body=' + encodeURIComponent(body);
});

//show Contact Popup//

// Function to display the popup
function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Event listener for form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Show the popup message
      showPopup();
  });
  
// Get the modal and the open button
const modal = document.getElementById('contactFormModal');
const openButton = document.getElementById('openFormButton');
const closeButton = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');

// Function to open the modal
function openModal() {
    modal.classList.remove('hidden');
}

// Function to close the modal
function closeModal() {
    modal.classList.add('hidden');
}

// Event listener to open the modal when the open button is clicked
openButton.addEventListener('click', openModal);

// Event listener to close the modal when the close button is clicked
closeButton.addEventListener('click', closeModal);

// Event listener to close the modal when the overlay is clicked
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        closeModal();
    }
});

// Event listener to close the modal when the Esc key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

//Testimonials

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(function(star) {
        star.addEventListener('click', function() {
            const rating = parseInt(star.getAttribute('data-rating'));
            stars.forEach(function(s) {
                const starRating = parseInt(s.getAttribute('data-rating'));
                if (starRating <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
});

function previewImage() {
    const preview = document.getElementById('preview');
    const file = document.getElementById('customer-image').files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
        preview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
}


// Testimonial

function openReviewPopup() {
    document.getElementById("reviewPopup").style.display = "block";
}

function closeReviewPopup() {
    document.getElementById("reviewPopup").style.display = "none";
}

function submitReview() {
    // Add your logic to submit the review data
    // Here you can fetch the data from the form fields and handle it accordingly
    // After submitting, you can close the popup
    closeReviewPopup();
}
