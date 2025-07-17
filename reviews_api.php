<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$place_id = 'ChIJ_afpFTEByEcRKu_s4gxUx-c';
$api_key = 'AIzaSyCGhQ4AIuuPoZEFAlolZU0_TzQQm-bJsHs';

$url = "https://maps.googleapis.com/maps/api/place/details/json?place_id={$place_id}&key={$api_key}&language=nl";

$response = file_get_contents($url);

if ($response === false) {
    echo json_encode(['error' => 'Failed to retrieve data']);
    exit;
}

// Decode the JSON response from Google Places API
$data = json_decode($response, true);

// Check if reviews are available
if (isset($data['result']['reviews'])) {
    echo json_encode($data['result']['reviews']);
} else {
    echo json_encode(['error' => 'No reviews found']);
}

?>