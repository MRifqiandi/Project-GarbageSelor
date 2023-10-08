<?php
session_start();

if (!isset($_SESSION["username"])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome, <?php echo $_SESSION["username"]; ?></h2>
    <p>This is the dashboard.</p>
    <!-- <a href="logout.php">Logout</a> -->

    <!-- Load the HTML content here -->
    <?php include('dashboard-pickup.html'); ?>
</body>
</html>
