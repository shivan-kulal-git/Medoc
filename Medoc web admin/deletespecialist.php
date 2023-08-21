<?php
$con = mysqli_connect("localhost","root","","medoc");
$id = $_GET['id'];
$sql = mysqli_query($con,"DELETE FROM `specialist` WHERE sid='$id'");
if($sql == true)
{
	echo'
	<script>
	window.location="specialist.php";
	</script>
	';
}
else
{
	echo'
	<script>
	alert("Error");
	window.location="specialist.php";
	</script>
	';
}
?>

