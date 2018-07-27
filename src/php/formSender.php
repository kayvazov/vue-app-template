<?php

$recepient = "kep45567@mail.ru";
$sitename = "mh36.ru";

// Variables
$name = htmlspecialchars(trim($_POST["name"]));
$surname = htmlspecialchars(trim($_POST["surname"]));
$date = htmlspecialchars(trim($_POST["date"]));
$phone = htmlspecialchars(trim($_POST["phone"]));
$people = htmlspecialchars(trim($_POST["people"]));
$message = "Имя: $name \nФамилия: $surname \nДата и время: $date \nТелефон: $phone \nКоличество человек: $people";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>