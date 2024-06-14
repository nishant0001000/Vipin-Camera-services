
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "rajputvashu429@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $messageContent = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if ($name && $email && $messageContent) {
        $message = "Name: " . $name . "\n";
        $message .= "Email: " . $email . "\n";
        $message .= "Message: " . $messageContent;
        $headers = "From: " . $email;

        if (mail($to, $subject, $message, $headers)) {
            echo "Your message has been sent successfully.";
        } else {
            echo "Unable to send message. Please try again later.";
        }
    } else {
        echo "Invalid input. Please check your data and try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
