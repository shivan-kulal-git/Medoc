

<?php
session_start();
if(isset($_SESSION['admin']))
{
?>

<?php
$con = mysqli_connect("localhost","root","","medoc");
?>

<?php
}
else
{
    echo'
    <script>
    alert("please login");
    window.location="index.php";
    </script>
    ';
}
?>