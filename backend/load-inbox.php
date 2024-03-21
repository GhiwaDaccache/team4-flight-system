<?php
include('connection.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);


$load_inbox = $mysqli->prepare('SELECT u.id, u.first_name AS sender_name, m.message_text AS last_message
FROM messages m
INNER JOIN users u ON m.sender_id = u.id
INNER JOIN chats c ON m.chat_id = c.id
WHERE m.sent_at IN (
  SELECT MAX(sent_at)
  FROM messages
  GROUP BY sender_id
) AND c.is_open=1');


$load_inbox->execute();
$load_inbox->store_result();

$inbox = [];
$load_inbox->bind_result($sender_id, $sender_name, $text);
while ($load_inbox->fetch()) {
    $single_chat = [
        'user_id' => $sender_id,
        'sender_name' => $sender_name,
        'text' => $text
    ];

    $inbox[] = $single_chat;
    $response['status'] = 'success';
    $response['inbox'] = $inbox;
};

echo json_encode($response);