<?php

$name = "Student";

$age = 20;

echo "<h1>PHP Basics</h1>";

echo "Name: " . $name . "<br>";

echo "Age: " . $age . "<br>";


// IF ELSE

if ($age >= 18) {

    echo "Adult<br>";

} else {

    echo "Minor<br>";

}


// ARRAY

$skills = array(
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL"
);

echo "<h2>Skills</h2>";

foreach ($skills as $skill) {

    echo $skill . "<br>";

}

?>