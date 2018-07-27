<?php
$apiToken = "513832109:AAHtALyxW2UQqLGGw4cs2LYhn8vKIAlsVng";

$data = [
  'chat_id' => '@SkanWIFI_bot',
  'text' => 'Эта херня пришла'
];

$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );