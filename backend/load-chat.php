<?php
include('connection.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);

$user_id=(int)$_GET["user_id"];

$load_messages = $mysqli->prepare('SELECT m.chat_id, m.sender_id, m.message_text, m.sent_at, u.first_name AS sender_name
FROM messages m
INNER JOIN users u ON m.sender_id = u.id
INNER JOIN chats c ON m.chat_id = c.id
WHERE c.is_open = 1 AND c.id = ?
ORDER BY m.sent_at ASC;');

$load_messages->bind_param('i',$user_id);

$load_messages->execute();
$load_messages->store_result();

$messages = [];
$load_messages->bind_result($chat_id, $sender_id, $text, $sent_at, $sender_name);
while ($load_messages->fetch()) {
    $message = [
        'sender_id' => $sender_id,
        'chat_id' => $chat_id,
        'sender_name' => $sender_name,
        'date' => $sent_at,
        'text' => $text
    ];

    $messages[] = $message;
    $response['status'] = 'success';
    $response['messages'] = $messages;
};

echo json_encode($response);


