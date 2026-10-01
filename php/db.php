<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "internship_db"
);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

echo "Database connected successfully!";

?>