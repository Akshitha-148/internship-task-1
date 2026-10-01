<?php

include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $course = $_POST["course"];

    $sql = "INSERT INTO students
            (name, email, course)
            VALUES (?, ?, ?)";

    $stmt = mysqli_prepare($conn, $sql);

    mysqli_stmt_bind_param(
        $stmt,
        "sss",
        $name,
        $email,
        $course
    );

    if (mysqli_stmt_execute($stmt)) {

        echo "Student added successfully!";

    } else {

        echo "Error adding student.";

    }

}

?>

<form method="POST">

    <input type="text"
           name="name"
           placeholder="Name"
           required>

    <input type="email"
           name="email"
           placeholder="Email"
           required>

    <input type="text"
           name="course"
           placeholder="Course"
           required>

    <button type="submit">
        Add Student
    </button>

</form>