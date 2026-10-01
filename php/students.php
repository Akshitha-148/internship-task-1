<?php

include "db.php";

$sql = "SELECT * FROM students";

$result = mysqli_query($conn, $sql);

?>

<!DOCTYPE html>

<html>

<head>

    <title>Students</title>

</head>

<body>

<h1>Student Records</h1>

<table border="1">

    <tr>

        <th>ID</th>

        <th>Name</th>

        <th>Email</th>

        <th>Course</th>

    </tr>

<?php

while ($row = mysqli_fetch_assoc($result)) {

?>

    <tr>

        <td>
            <?php echo $row["id"]; ?>
        </td>

        <td>
            <?php echo htmlspecialchars($row["name"]); ?>
        </td>

        <td>
            <?php echo htmlspecialchars($row["email"]); ?>
        </td>

        <td>
            <?php echo htmlspecialchars($row["course"]); ?>
        </td>

    </tr>

<?php

}

?>

</table>

</body>

</html>