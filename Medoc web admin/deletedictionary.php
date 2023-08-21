<?php
$con = mysqli_connect("localhost","root","","medoc");
$id = $_GET['id'];
$sql = mysqli_query($con,"DELETE FROM `disdictionary` WHERE disid='$id'");
if($sql == true)
{
	echo'
	<script>
	window.location="disdict.php";
	</script>
	';
}
else
{
	echo'
	<script>
	alert("Error");
	window.location="disdict.php";
	</script>
	';
}
?>

