<?php
$con = mysqli_connect("localhost","root","","medoc");
$id = $_GET['id'];
$sql = mysqli_query($con,"DELETE FROM `prescription` WHERE PSid='$id'");
if($sql == true)
{
	echo'
	<script>
	window.location="precreption.php";
	</script>
	';
}
else
{
	echo'
	<script>
	alert("Error");
	window.location="precreption.php";
	</script>
	';
}
?>
