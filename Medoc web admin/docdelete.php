<?php
$con = mysqli_connect("localhost","root","","medoc");
$id = $_GET['id'];
$sql = mysqli_query($con,"DELETE FROM `doctorlist` WHERE Did='$id'");
if($sql == true)
{
	echo'
	<script>
	window.location="doctor.php";
	</script>
	';
}
else
{
	echo'
	<script>
	alert("Error");
	window.location="doctor.php";
	</script>
	';
}
?>

