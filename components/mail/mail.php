<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];


    $to = "a3emond@gmail.com";
    $subject = "New message from your website";
    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Email sending failed"]);
    }
    exit;
}
?>
<link
  rel="stylesheet"
  type="text/css"
  href="apps/toDoApp/public/css/styles.css"
/>
<h1>Contactez-moi!</h1>
<br />
<div class="formContainer" style="max-width:400px;">
<form action="mail.php" method="post">
    <label for="name">Nom:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email"><br>
    <label for="message">Message:</label><br>
    <textarea id="description" name="message"></textarea><br>
    <button class="formBtn" id="send" type="submit">Envoyer</button>
</form>
</div>