<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = 'rajputvashu429@gmail.com'; // Change this to your email address
    $subject = 'New Inquiry from Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        // If email is sent successfully, redirect back to the form page with a success message
        header('Location: your-form-page.html?status=success');
        exit;
    } else {
        // If there was an error sending the email, redirect back to the form page with an error message
        header('Location: your-form-page.html?status=error');
        exit;
    }
}
?>
