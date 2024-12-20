<?php

  header('Content-Type: application/json');

  // Sanitize email address
  function sanitize_email($email) {
    return filter_var($email, FILTER_SANITIZE_EMAIL);
  }

  $data = json_decode(file_get_contents("php://input"), TRUE);

  if (!$data) {
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

  if (sanitize_email($data['email'])) {
    $to = 'info@vechtdaltweewielers.nl';
    $subject = 'Contact formulier - ' . $data['subject'];
    $message = $data['message'] . "\n\n";
    $message .= 'Naam: ' . $data['name'] . "\n";
    $message .= 'E-mail: ' . $data['email'] . "\n";
    if ($data['phone']) {
      $message .= 'Tel: ' . $data['phone'] . "\n";
    }
    $headers = "From: " . $data['email'] . "\n";

    if (mail($to, $subject, $message, $headers)) {
      echo json_encode(['success' => true]); // Send success message to Vue
    } else {
      echo json_encode(['error' => 'Error sending email']); // Send error message
    }
  }
?>