<?php

require ('phpmailer/PHPMailerAutoload.php');
require_once ('phpmailer/class.phpmailer.php');
include ('phpmailer/class.smtp.php');

$mail = new PHPMailer();

$name = trim(strip_tags($_POST['name']));
$contact = $_POST['contact'];
$company = trim(strip_tags($_POST['company']));
$referer = $_SERVER['HTTP_REFERER'];
$formType = $_POST['type'];

$mail->isSMTP();

$mail->Host = 'smtp.timeweb.ru';
// //$mail->SMTPDebug  = 2;
$mail->SMTPAuth = true;
$mail->Username = 'request@mirrorcx.com';  // Свой логин для почты
$mail->Password = 'gprVfgex'; // Пароль от почтового ящика
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';

$mail->CharSet = 'UTF-8';
$mail->From = 'request@mirrorcx.com';
$mail->FromName = 'Request-Robot';
$mail->addAddress('Info@trood.ru');
$mail->isHTML(true);

if ($company) {
	$body = "<p>Пользователь - <b>$name</b>, оставил свой контакт:<br>
               <b>$contact</b><br>
               Название компании: <b>$company<b></p>";
} else {
	$body = "<p>Пользователь - <b>$name</b>, оставил свой контакт:<br>
               <b>$contact</b><p>";
}

$mail->Subject = $formType;
$mail->Body = $body;

function generateString($length = 64){
  $chars = 'abdefhiknrstyzABDEFGHKNQRSTYZ23456789';
  $numChars = strlen($chars);
  $string = '';
  for ($i = 0; $i < $length; $i++) {
    $string .= substr($chars, rand(1, $numChars) - 1, 1);
  }
  return $string;
}

echo generateString();

$mail->send()




?>