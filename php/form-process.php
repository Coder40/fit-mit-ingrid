<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone_no = $_POST['phone_no'];
$subjectt = $_POST['subject'];
$message = $_POST['message'];


$email_from = $visitor_email;

$subject = $subjectt;

$email_body = "User Name: $name.\n".
"User Email: $visitor_email.\n".
"Numper Phone: $phone_no.\n".
"User Message: $message.\n";


$to = "ingrid.fuerst@gmx.net";

$headers = "From: $email_from \r\n";


mail($to,$subject,$email_body,$headers);

header("Location: ../index.html");




?>