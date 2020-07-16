<?php

if(isset($_POST['subnet'])){
    $name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone_no = $_POST['phone_no'];
$subjectt = $_POST['subject'];
$message = $_POST['message'];


$to='coder.md.4@gmail.com'


$message="Name:".$name."\n"."Phone:".$phone_no."\n"."Message:".$message;
$headers="Form:".$visitor_email;

if(mail($to,$subject,$visitor_email,$headers)){
   echo"Send Successfully!"
}
else{
    echo "Something went wrong"
}
}

header("Location: ../index.html");




?>