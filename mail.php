<?php

$recepient = "svetlana.shurla4acova@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);
$text = "Имя: $name \nEmail: $email \nТелефон: $phone \nСообщение: $message";
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $text, "From: $recepient");